import { Card, CardContent } from "~/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Card>
        <CardContent className="space-y-6">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>

          <p>Last updated: May 21, 2025</p>

          <p>
            This Privacy Policy describes how your information is handled in the "Locked In" app.
          </p>

          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p>
            <strong>We do not collect or store any personal data.</strong> "Locked In" operates entirely on your device and does not transmit any information to external servers.
          </p>

          <h2 className="text-xl font-semibold">Third-Party Services</h2>
          <p>
            "Locked In" does not integrate with any third-party services or analytics tools.
          </p>

          <h2 className="text-xl font-semibold">Data Storage</h2>
          <p>
            All app settings and timer states are stored locally on your device. None of this information is accessible by the developer or any other party.
          </p>

          <h2 className="text-xl font-semibold">Personal Data Privacy</h2>
          <p>
            Since "Locked In" does not collect any personal information, it is safe for users of all ages, including children under 13.
          </p>

          <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          <p>
            This privacy policy may be updated in the future. If any changes are made, they will be reflected on this page.
          </p>

          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            If you have any questions about this privacy policy, feel free to contact us at:{" "}
            <a href="mailto:ilcf1u@gmail.com" className="underline text-blue-600">
              ilcf1u@gmail.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
