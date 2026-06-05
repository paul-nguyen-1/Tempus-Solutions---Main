import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      {
        title: 'Privacy Policy - Tempus Solutions',
      },
      {
        name: 'description',
        content: 'Privacy policy for Tempus Solutions',
      },
    ],
  }),
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <main className="site-main">
      <div className="page-wrap py-8 sm:py-16 px-4 sm:px-0">
        <article className="max-w-3xl">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Privacy Policy</h1>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Introduction</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              Tempus Solutions ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Information We Collect</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-(--sea-ink-soft)">
              <li><strong>Personal Data:</strong> Personally identifiable information such as your name, shipping address, email address, and telephone number that you voluntarily give to us when you choose to participate in various activities related to the Site.</li>
              <li><strong>Form Data:</strong> We store non-sensitive form inputs for convenience so your drafts and contact details persist during your session.</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (such as valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
              <li><strong>Data From Contests, Giveaways, and Surveys:</strong> Personal and preference information you may provide when entering contests or giveaways and to analyze how the Site is used.</li>
              <li><strong>Mobile Device Data:</strong> Device information such as your mobile device ID, model, and manufacturer, and information about the location of your device.</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Use of Your Information</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-(--sea-ink-soft)">
              <li>Generate a personal profile about you so that future visits to the Site are personalized</li>
              <li>Increase the efficiency and operation of the Site</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
              <li>Notify you of updates to the Site</li>
              <li>Offer new products, services, and/or recommendations to you</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Disclosure of Your Information</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We are committed to maintaining the confidentiality of your information.
            </p>
            <p className="text-(--sea-ink-soft) leading-relaxed">
              However, we may disclose your information when required by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on our Company or the Site; (b) protect and defend the rights or property of our Company; or (c) act under exigent circumstances to protect the personal safety of users of the Site, or the public.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Security of Your Information</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Contact Us</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 text-sm sm:text-base text-(--sea-ink-soft)">
              <p className="font-semibold mb-1">Tempus Solutions</p>
              <p className="m-0"><a href="mailto:info@tempussolutions.io" className="text-(--lagoon-deep) no-underline hover:underline">info@tempussolutions.io</a></p>
            </div>
          </section>

          <section className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-(--line)">
            <p className="text-xs sm:text-sm text-(--sea-ink-soft)">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
