import React from "react";

const About = () => {
  return (
    <>
      <div
        className="min-h-screen py-10 px-4"
        style={{
          backgroundColor: "var(--color-background)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              About Craving
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(43, 29, 29, 0.7)" }}
            >
              Because good food shouldn’t be hard to find.
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 space-y-6">
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              <strong>Craving</strong> is a food delivery platform built for
              people who love good food and value convenience. Whether it’s a
              late-night hunger, a comfort meal, or your everyday favourite, we
              help you get what you’re craving — quickly and reliably.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              We partner with trusted restaurants and kitchens to ensure quality,
              freshness, and taste in every order. From local favourites to
              popular cuisines, Craving brings a wide variety of options right
              to your doorstep.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              Our goal is simple: make food ordering effortless, transparent,
              and enjoyable. No confusion, no unnecessary steps — just good
              food, delivered when you want it.
            </p>
          </div>

          {/* Highlight Strip */}
          <div
            className="mt-10 rounded-lg p-6 text-center"
            style={{
              backgroundColor: "rgba(255, 183, 3, 0.15)",
              color: "var(--color-text)",
            }}
          >
            <p className="font-semibold text-lg">
              Built with care. Delivered with love.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
