import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 lg:px-24 max-w-6xl mx-auto leading-relaxed">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        Terms of Use
      </h1>

      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Please read these Terms of Use carefully before using Kuleanpay’s
        services. By accessing or using our website and mobile application,
        you agree to be bound by these terms.
      </p>

      {/* Section 1: Definitions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          1. Definitions
        </h2>
        <p>
          In these Terms, “Kuleanpay”, “we”, “our”, or “us” refers to the
          Kuleanpay platform and its associated services. “User”, “you”, or
          “your” refers to any individual or entity accessing or using our
          platform. “Services” refers to all functionalities including
          escrow, digital banking, and merchant payment solutions provided by
          Kuleanpay.
        </p>
      </section>

      {/* Section 2: Conditions of Use */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          2. Conditions of Use
        </h2>
        <p>
          You must be at least 18 years old and have the legal capacity to
          enter into binding contracts to use our services. You agree to use
          the platform only for lawful purposes and not in any way that may
          impair, damage, or disrupt the service.
        </p>
      </section>

      {/* Section 3: Account Responsibilities */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          3. Account Responsibilities
        </h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials. Kuleanpay is not liable for any loss or damage
          arising from unauthorized access to your account resulting from your
          failure to safeguard your login information.
        </p>
      </section>

      {/* Section 4: Escrow and Transactions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          4. Escrow and Transactions
        </h2>
        <p>
          All transactions carried out via Kuleanpay’s escrow service must
          comply with our escrow policies. Funds are held securely until both
          parties confirm satisfaction. Fraudulent activity will result in
          account suspension and possible legal action.
        </p>
      </section>

      {/* Section 5: Payment and Fees */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          5. Payment and Fees
        </h2>
        <p>
          Kuleanpay may charge transaction or service fees as clearly stated
          during payment. By proceeding with any transaction, you agree to all
          applicable fees and charges associated with the service.
        </p>
      </section>

      {/* Section 6: Prohibited Activities */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          6. Prohibited Activities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Using the platform for illegal or fraudulent transactions.</li>
          <li>Impersonating another user or misrepresenting your identity.</li>
          <li>
            Attempting to hack, disrupt, or manipulate Kuleanpay systems or
            data.
          </li>
          <li>Uploading harmful, offensive, or misleading content.</li>
        </ul>
      </section>

      {/* Section 7: Termination */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          7. Termination
        </h2>
        <p>
          Kuleanpay reserves the right to suspend or terminate your access to
          our services at any time without prior notice if you violate these
          terms or engage in suspicious or unlawful activities.
        </p>
      </section>

      {/* Section 8: Limitation of Liability */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          8. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, Kuleanpay shall not be
          liable for any indirect, incidental, or consequential damages
          arising from your use or inability to use our services.
        </p>
      </section>

      {/* Section 9: Changes to the Terms */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          9. Changes to the Terms
        </h2>
        <p>
          We may update these Terms of Use periodically. Continued use of our
          services after any modifications implies your acceptance of the
          revised terms.
        </p>
      </section>

      {/* Section 10: Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          10. Contact Information
        </h2>
        <p>
          For any questions or concerns regarding these Terms of Use, please
          contact us at{" "}
          <a
            href="mailto:support@kuleanpay.com"
            className="text-blue-600 hover:underline"
          >
            support@kuleanpay.com
          </a>
          .
        </p>
      </section>
    </div>  
  );
};

export default TermsOfUse;
