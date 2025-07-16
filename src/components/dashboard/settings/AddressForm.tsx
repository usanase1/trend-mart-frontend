"use client";

import { useState } from "react";
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { MapPin, Navigation } from "lucide-react";

interface AddressFormProps {
  title: string;
}

export default function AddressForm({ title }: AddressFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    region: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
    locationType: "home", // home, work, other
    customLocation: ""
  });

  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setForm(prev => ({ 
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
      
      // Reverse geocoding to get address
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      );
      
      if (response.ok) {
        const data = await response.json();
        const address = data.display_name;
        
        setForm(prev => ({
          ...prev,
          address: address,
          city: data.address?.city || data.address?.town || "",
          country: data.address?.country || "",
          region: data.address?.state || data.address?.province || "",
          zip: data.address?.postcode || ""
        }));
      }
    } catch (error) {
      console.error("Error getting location:", error);
      alert("Unable to get your current location. Please enter your address manually.");
    } finally {
      setIsLoadingLocation(false);
    }
  };

  return (
    <div className="border-gray-100 p-6 rounded-md w-full">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
        <Input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
        <Input name="company" placeholder="Company Name (Optional)" value={form.company} onChange={handleChange} className="col-span-2" />
        
        {/* Location Type Selection */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" />
            Location Type
          </label>
          <Select 
            name="locationType"
            value={form.locationType}
            onChange={handleLocationTypeChange}
            options={[
              { value: "home", label: "🏠 Home" },
              { value: "work", label: "🏢 Work" },
              { value: "other", label: "📍 Other" }
            ]}
            className="text-gray-700"
          />
        </div>

        {/* Custom Location Name */}
        {form.locationType === "other" && (
          <Input 
            name="customLocation"
            placeholder="Location name (e.g., Grandma's house, Vacation home)" 
            value={form.customLocation}
            onChange={handleChange}
            className="col-span-2"
          />
        )}

        {/* Current Location Button */}
        <div className="col-span-2">
          <Button
            type="button"
            onClick={getCurrentLocation}
            disabled={isLoadingLocation}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            {isLoadingLocation ? "Getting Location..." : "Use Current Location"}
          </Button>
        </div>

        <Input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="col-span-2" />
        <Select name="country" value={form.country} onChange={handleChange} options={[
          { value: "", label: "Select Country" },
          { value: "US", label: "United States" },
          { value: "CA", label: "Canada" },
          { value: "UK", label: "United Kingdom" },
          { value: "AU", label: "Australia" },
          { value: "DE", label: "Germany" },
          { value: "FR", label: "France" },
          { value: "JP", label: "Japan" },
          { value: "IN", label: "India" },
          { value: "BR", label: "Brazil" },
          { value: "RW", label: "Rwanda" },
          { value: "BD", label: "Bangladesh" }
        ]} className="text-gray-700" />
        <Select name="region" value={form.region} onChange={handleChange} options={[
          { value: "", label: "Select Region/State" },
          { value: "CA", label: "California" },
          { value: "NY", label: "New York" },
          { value: "TX", label: "Texas" },
          { value: "FL", label: "Florida" },
          { value: "ON", label: "Ontario" },
          { value: "BC", label: "British Columbia" },
          { value: "Kigali", label: "Kigali" },
          { value: "Dhaka", label: "Dhaka" }
        ]} className="text-gray-700" />
        <Input name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <Input name="zip" placeholder="Zip Code" value={form.zip} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="col-span-2" />
        <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="col-span-2" />
      </div>

      <Button className="mt-6" variant="primary" size="md">SAVE ADDRESS</Button>
    </div>
  );
}
