import React from "react";

const AwarenessPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Water Sustainability Awareness</h1>
        
        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg">
            Water sustainability is the management of water resources to ensure availability for current and future generations without compromising the ecological balance of aquatic ecosystems. It involves responsible water usage, conservation efforts, and environmental stewardship.
          </p>
        </section>

        {/* Importance of Water Sustainability */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Importance of Water Sustainability</h2>
          <p className="text-lg">
            Water is essential for life and plays a crucial role in various aspects of human existence, including agriculture, industry, and sanitation. However, factors such as population growth, climate change, and pollution are putting pressure on water resources, leading to scarcity and degradation. Water sustainability is vital to ensure access to clean and safe water for all and to protect the environment.
          </p>
        </section>

        {/* Tips for Water Conservation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tips for Water Conservation</h2>
          <ul className="list-disc pl-8">
            <li className="text-lg">Fix leaks promptly to prevent water wastage.</li>
            <li className="text-lg">Use water-efficient appliances and fixtures.</li>
            <li className="text-lg">Take shorter showers and turn off the tap while brushing teeth.</li>
            <li className="text-lg">Water plants during the early morning or evening to minimize evaporation.</li>
            <li className="text-lg">Collect rainwater for irrigation and other non-potable uses.</li>
            <li className="text-lg">Spread awareness about water conservation in your community.</li>
          </ul>
          </section>
        {/* Call to Action */}
<section className="text-center">
  <h2 className="text-2xl font-semibold mb-4">Take Action Today!</h2>
  <p className="text-lg mb-6">Together, we can make a difference in ensuring water sustainability for future generations. Start conserving water and advocating for responsible water management practices.</p>
  <a href="https://forms.gle/vQkGbtp5HzXAHcGW7" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded hover:bg-blue-600 transition duration-200">Get Involved</a>
</section>

      </div>
    </div>
  );
};

export default AwarenessPage;
