import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      {
        title: 'Terms and Conditions - Tempus Solutions',
      },
      {
        name: 'description',
        content: 'Terms and conditions for Tempus Solutions',
      },
    ],
  }),
  component: TermsAndConditions,
})

function TermsAndConditions() {
  return (
    <main className="site-main">
      <div className="page-wrap py-8 sm:py-16 px-4 sm:px-0">
        <article className="max-w-3xl">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Terms and Conditions</h1>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Agreement to Terms</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Tempus Solutions ("we," "us," "our," or "Company"), concerning your access to and use of the tempussolutions.io website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Use License</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Tempus Solutions' Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-(--sea-ink-soft)">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Attempt to gain unauthorized access to any portion or feature of the Site, or any other systems or networks connected to the Site</li>
              <li>Harass or cause distress or inconvenience to any person</li>
              <li>Offend the decency of the internet</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Disclaimer</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              The materials on Tempus Solutions' Site are provided on an 'as is' basis. Tempus Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Limitations</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              In no event shall Tempus Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tempus Solutions' Site, even if Tempus Solutions or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Accuracy of Materials</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              The materials appearing on Tempus Solutions' Site could include technical, typographical, or photographic errors. Tempus Solutions does not warrant that any of the materials on the Site are accurate, complete, or current. Tempus Solutions may make changes to the materials contained on the Site at any time without notice.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Links</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              Tempus Solutions has not reviewed all of the sites linked to its Site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tempus Solutions of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Modifications</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              Tempus Solutions may revise these Terms and Conditions for the Site at any time without notice. By using this Site, you are agreeing to be bound by the then current version of these Terms and Conditions.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Governing Law</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Contact Information</h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
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
