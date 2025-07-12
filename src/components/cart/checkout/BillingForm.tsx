"use client";

import { useState } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";

export default function BillingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    region: "",
    city: "",
    zipCode: "",
    email: "",
    phone: "",
    locationType: "home", // home, work, other
    customLocation: ""
  });
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLocationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      locationType: value,
      customLocation: value === "other" ? prev.customLocation : ""
    }));
  };

  const getCurrentLocation = async () => {
    setIsLoadingLocation(true);
    try {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by this browser.");
        return;
      }

      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        });
      });

      const { latitude, longitude } = position.coords;
      setCoords({ lat: latitude, lng: longitude });
      // Reverse geocoding to get address
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      );
      
      if (response.ok) {
        const data = await response.json();
        const address = data.display_name;
        
        setFormData(prev => ({
          ...prev,
          address: address,
          city: data.address?.city || data.address?.town || "",
          country: data.address?.country || "",
          region: data.address?.state || data.address?.province || "",
          zipCode: data.address?.postcode || ""
        }));
      }
    } catch (error) {
      console.error("Error getting location:", error);
      alert("Unable to get your current location. Please enter your address manually.");
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const googleMapsUrl = coords
    ? `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`
    : null;

  return (
    <section>
      <h2 className="font-bold text-lg mb-4">Billing Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          type="text" 
          name="firstName"
          placeholder="First name" 
          value={formData.firstName}
          onChange={handleInputChange}
          className="input" 
        />
        <input 
          type="text" 
          name="lastName"
          placeholder="Last name" 
          value={formData.lastName}
          onChange={handleInputChange}
          className="input" 
        />
        <input 
          type="text" 
          name="company"
          placeholder="Company Name (Optional)" 
          value={formData.company}
          onChange={handleInputChange}
          className="input md:col-span-2" 
        />
        {/* Location Type Selection */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" />
            Location Type
          </label>
          <select 
            name="locationType"
            value={formData.locationType}
            onChange={handleLocationTypeChange}
            className="input w-full"
          >
            <option value="home">🏠 Home</option>
            <option value="work">🏢 Work</option>
            <option value="other">📍 Other</option>
          </select>
        </div>
        {/* Custom Location Name */}
        {formData.locationType === "other" && (
          <input 
            type="text" 
            name="customLocation"
            placeholder="Location name (e.g., Grandma's house, Vacation home)" 
            value={formData.customLocation}
            onChange={handleInputChange}
            className="input md:col-span-2" 
          />
        )}
        {/* Current Location Button */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <Button
            type="button"
            onClick={getCurrentLocation}
            disabled={isLoadingLocation}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            {isLoadingLocation ? "Getting Location..." : "Use Current Location"}
          </Button>
          {googleMapsUrl && (
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2 text-center"
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </a>
          )}
        </div>
        <input 
          type="text" 
          name="address"
          placeholder="Address" 
          value={formData.address}
          onChange={handleInputChange}
          className="input md:col-span-2" 
        />
        <select 
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="input"
        >
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="AU">Australia</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
          <option value="JP">Japan</option>
          <option value="IN">India</option>
          <option value="BR">Brazil</option>
          <option value="RW">Rwanda</option>
          <option value="BD">Bangladesh</option>
        </select>
        <select 
          name="region"
          value={formData.region}
          onChange={handleInputChange}
          className="input"
        >
          <option value="">Select Region/State</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          <option value="TX">Texas</option>
          <option value="FL">Florida</option>
          <option value="ON">Ontario</option>
          <option value="BC">British Columbia</option>
          <option value="Kigali">Kigali</option>
          <option value="Dhaka">Dhaka</option>
        </select>
        <input 
          type="text" 
          name="city"
          placeholder="City" 
          value={formData.city}
          onChange={handleInputChange}
          className="input" 
        />
        <input 
          type="text" 
          name="zipCode"
          placeholder="Zip Code" 
          value={formData.zipCode}
          onChange={handleInputChange}
          className="input" 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleInputChange}
          className="input" 
        />
        <input 
          type="text" 
          name="phone"
          placeholder="Phone Number" 
          value={formData.phone}
          onChange={handleInputChange}
          className="input" 
        />
        <label className="col-span-2 flex items-center gap-2 mt-2">
          <input type="checkbox" />
          Ship into different address
        </label>
      </div>
    </section>
  );
}
