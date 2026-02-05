
export default function SignupPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-semibold mb-4">
        Open a Zerodha account
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
        and F&O trades.
      </p>

      <div className="max-w-md mx-auto bg-white border rounded-lg p-8 shadow-sm">
        <input
          type="text"
          placeholder="Mobile number"
          className="w-full border px-4 py-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-[#387ED1] text-white py-3 rounded hover:bg-blue-600 transition">
          Continue
        </button>
        <p className="text-sm text-gray-500 mt-4">
          By proceeding, you agree to Zerodha’s terms & privacy policy.
        </p>
      </div>
    </main>
  );
}
