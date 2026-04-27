import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ShoppingBag,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white mt-10">
      {/* TOP */}

      <div className="max-w-[1400px] mx-auto px-3 md:px-6 py-12">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-6">
          {/* BRAND */}

          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <ShoppingBag className="text-white" />
              </div>

              <h2 className="text-xl font-semibold text-blue-500">Brand</h2>
            </div>

            <p className="text-gray-500 text-sm leading-6 mb-5 max-w-xs">
              Best information about the company goes here but now lorem ipsum
              is
            </p>

            <div className="flex gap-3">
              <div className="social">
                <Facebook size={18} />
              </div>

              <div className="social">
                <Twitter size={18} />
              </div>

              <div className="social">
                <Linkedin size={18} />
              </div>

              <div className="social">
                <Instagram size={18} />
              </div>

              <div className="social">
                <Youtube size={18} />
              </div>
            </div>
          </div>

          {/* ABOUT */}

          <div>
            <h3 className="font-semibold mb-3">About</h3>

            <ul className="space-y-2 text-gray-500 text-sm">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* PARTNERSHIP */}

          <div>
            <h3 className="font-semibold mb-3">Partnership</h3>

            <ul className="space-y-2 text-gray-500 text-sm">
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* INFORMATION */}

          <div>
            <h3 className="font-semibold mb-3">Information</h3>

            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* USERS */}

          <div>
            <h3 className="font-semibold mb-3">For users</h3>

            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="/auth/login">Login</a>
              </li>
              <li>
                <a href="/auth/register">Register</a>
              </li>
              <li>
                <a href="/profile">Settings</a>
              </li>
              <li>
                <a href="/orders">My Orders</a>
              </li>
            </ul>
          </div>

          {/* GET APP */}

          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-3">Get app</h3>

            <div className="flex  gap-3">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                className="w-[120px]"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="w-[135px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="border-t border-gray-300 bg-gray-100">
        <div className="max-w-[1200px] mx-auto px-3 md:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2026 Ecommerce.</p>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src="https://flagcdn.com/w40/us.png" className="w-5" />
            English
          </div>
        </div>
      </div>
    </footer>
  );
}
