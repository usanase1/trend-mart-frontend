import { Package, Trophy, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: <Package className="text-orange-500" />,
    title: "FASTED DELIVERY",
    description: "Delivery in 24/H",
  },
  {
    icon: <Trophy className="text-orange-500" />,
    title: "24 HOURS RETURN",
    description: "100% money back guarantee",
  },
  {
    icon: <ShieldCheck className="text-orange-500" />,
    title: "SECURE PAYMENT",
    description: "Your money is safe",
  },
  {
    icon: <Headphones className="text-orange-500" />,
    title: "24/7 SUPPORT",
    description: "Dedicated support",
  },
];

const FeatureHighlights = () => (
  <div className="flex flex-wrap gap-6 my-8 justify-between text-sm text-black py-24">
    {features.map((feature, idx) => (
      <div className="flex items-center gap-2" key={idx}>
        {feature.icon}
        <div>
          <p className="font-bold">{feature.title}</p>
          <span className="text-gray-500">{feature.description}</span>
        </div>
      </div>
    ))}
  </div>
);

export default FeatureHighlights; 