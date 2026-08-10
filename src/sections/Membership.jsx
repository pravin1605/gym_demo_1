import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  ArrowUpRight,
  User,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "₹999",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Gym Access",
      "Basic Equipment",
      "Locker Access",
    ],
  },
  {
    name: "PRO",
    price: "₹1,999",
    description: "Everything you need to train consistently and progress.",
    features: [
      "Full Gym Access",
      "Personalized Workout Plan",
      "Progress Tracking",
      "Trainer Support",
    ],
    popular: true,
  },
  {
    name: "ELITE",
    price: "₹3,499",
    description: "Premium coaching and complete fitness support.",
    features: [
      "Everything in PRO",
      "Personal Training",
      "Diet Plan",
      "Body Measurement Tracking",
      "Priority Support",
    ],
  },
];

function Membership() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setSubmitted(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
    });

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setSubmitted(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <>
      {/* =====================================================
          MEMBERSHIP SECTION
      ====================================================== */}

      <section
        id="membership"
        className="px-4 py-20 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-12"
          >
            <p className="text-xs font-black tracking-[0.3em] text-[#b7ff3c]">
              MEMBERSHIP
            </p>

            <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                INVEST IN
                <br />

                <span className="text-[#b7ff3c]">
                  YOURSELF.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-white/45">
                Choose the membership that fits your goals,
                training style and commitment.
              </p>

            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {plans.map((plan, index) => (
              <motion.article
                key={plan.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`relative overflow-hidden rounded-[2rem] p-7 transition ${
                  plan.popular
                    ? "bg-[#b7ff3c] text-black"
                    : "border border-white/10 bg-white/[0.03]"
                }`}
              >

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-black px-3 py-1.5 text-[10px] font-black tracking-wider text-white">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Name */}
                <p
                  className={`text-xs font-black tracking-[0.2em] ${
                    plan.popular
                      ? "text-black/50"
                      : "text-white/40"
                  }`}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">

                  <span className="text-5xl font-black tracking-tight">
                    {plan.price}
                  </span>

                  <span
                    className={`mb-1 text-sm ${
                      plan.popular
                        ? "text-black/50"
                        : "text-white/35"
                    }`}
                  >
                    /month
                  </span>

                </div>

                {/* Description */}
                <p
                  className={`mt-5 min-h-[48px] text-sm leading-relaxed ${
                    plan.popular
                      ? "text-black/60"
                      : "text-white/45"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-7 space-y-4">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      <Check
                        size={17}
                        className={`mt-0.5 shrink-0 ${
                          plan.popular
                            ? "text-black"
                            : "text-[#b7ff3c]"
                        }`}
                      />

                      <span
                        className={`text-sm ${
                          plan.popular
                            ? "text-black/75"
                            : "text-white/65"
                        }`}
                      >
                        {feature}
                      </span>

                    </li>
                  ))}

                </ul>

                {/* CTA */}
                <button
                  onClick={() => openModal(plan)}
                  className={`group mt-9 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-black transition duration-300 ${
                    plan.popular
                      ? "bg-black text-white hover:scale-[1.02]"
                      : "bg-white text-black hover:bg-[#b7ff3c]"
                  }`}
                >
                  Choose Plan

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>

              </motion.article>
            ))}

          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-white/30">
              All memberships include access to our modern
              training environment and fitness community.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          MEMBERSHIP MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-md"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] shadow-2xl"
            >

              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white"
                aria-label="Close membership modal"
              >
                <X size={18} />
              </button>

              {!submitted ? (
                <>
                  {/* Modal Header */}
                  <div className="border-b border-white/10 p-7 sm:p-8">

                    <p className="text-xs font-black tracking-[0.25em] text-[#b7ff3c]">
                      MEMBERSHIP REQUEST
                    </p>

                    <h3 className="mt-3 pr-10 text-3xl font-black">
                      JOIN{" "}
                      <span className="text-[#b7ff3c]">
                        {selectedPlan.name}
                      </span>
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/45">
                      Fill in your details and our team will
                      contact you to complete your membership.
                    </p>

                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="p-7 sm:p-8"
                  >

                    {/* Name */}
                    <div>

                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-bold text-white/50"
                      >
                        FULL NAME
                      </label>

                      <div className="relative">

                        <User
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#b7ff3c]/50 focus:bg-white/[0.06]"
                        />

                      </div>

                    </div>

                    {/* Phone */}
                    <div className="mt-5">

                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-bold text-white/50"
                      >
                        PHONE NUMBER
                      </label>

                      <div className="relative">

                        <Phone
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                          pattern="[0-9]{10}"
                          maxLength={10}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#b7ff3c]/50 focus:bg-white/[0.06]"
                        />

                      </div>

                    </div>

                    {/* Email */}
                    <div className="mt-5">

                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold text-white/50"
                      >
                        EMAIL ADDRESS
                      </label>

                      <div className="relative">

                        <Mail
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#b7ff3c]/50 focus:bg-white/[0.06]"
                        />

                      </div>

                    </div>

                    {/* Selected Plan */}
                    <div className="mt-6 rounded-xl border border-[#b7ff3c]/20 bg-[#b7ff3c]/5 p-4">

                      <p className="text-[10px] font-black tracking-widest text-white/30">
                        SELECTED MEMBERSHIP
                      </p>

                      <div className="mt-2 flex items-center justify-between">

                        <span className="font-bold">
                          {selectedPlan.name}
                        </span>

                        <span className="font-black text-[#b7ff3c]">
                          {selectedPlan.price}
                          <span className="ml-1 text-xs font-normal text-white/30">
                            /month
                          </span>
                        </span>

                      </div>

                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#b7ff3c] py-4 text-sm font-black text-black transition hover:scale-[1.01]"
                    >
                      REQUEST MEMBERSHIP

                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </button>

                    <p className="mt-4 text-center text-[11px] leading-relaxed text-white/25">
                      This is a demo enquiry form. No payment
                      is required at this stage.
                    </p>

                  </form>
                </>
              ) : (
                /* =================================================
                   SUCCESS STATE
                ================================================== */

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="px-7 py-14 text-center sm:px-10"
                >

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#b7ff3c]/10">

                    <CheckCircle2
                      size={42}
                      className="text-[#b7ff3c]"
                    />

                  </div>

                  <h3 className="mt-7 text-3xl font-black">
                    REQUEST RECEIVED
                  </h3>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/45">
                    Thanks,{" "}
                    <span className="font-bold text-white">
                      {formData.name}
                    </span>
                    . Your{" "}
                    <span className="font-bold text-[#b7ff3c]">
                      {selectedPlan.name}
                    </span>{" "}
                    membership request has been recorded.
                  </p>

                  <p className="mt-4 text-xs text-white/30">
                    Our team will contact you shortly at{" "}
                    {formData.phone}.
                  </p>

                  {/* WhatsApp Follow-up */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hello Evergrow Technologies, I just submitted a ${selectedPlan.name} membership request for IronForge Gym. My name is ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-black text-white transition hover:scale-[1.01]"
                  >
                    <span>Continue on WhatsApp</span>
                    <ArrowUpRight size={17} />
                  </a>

                  {/* Close */}
                  <button
                    onClick={closeModal}
                    className="mt-3 w-full rounded-full border border-white/10 py-3.5 text-sm font-bold text-white/50 transition hover:bg-white/5 hover:text-white"
                  >
                    Close
                  </button>

                </motion.div>
              )}

            </motion.div>

          </motion.div>
        )}

        
      </AnimatePresence>


    </>
  );
}

export default Membership;