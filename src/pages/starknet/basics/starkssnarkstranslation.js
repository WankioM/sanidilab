export const translations = {
  en: {
    header: {
      title: "STARKs vs SNARKs",
      languageButton: "Switch to Kiswahili"
    },
    cards: [
      {
        frontTitle: "STARKs",
        frontEmoji: "⚡",
        frontContent: {
          title: "Scalable Transparent ARguments of Knowledge",
          points: [
            "Post-quantum secure",
            "Lower gas fees",
            "Higher computing power"
          ]
        },
        backTitle: "STARKS-KEY FEATURES",
        backEmoji: "⚡",
        backContent: {
          sections: [
            { title: "Transparency", text: "Transparent, no trusted setup required" },
            { title: "Proof Generation Efficiency", text: "Efficient for large computations, highly scalable" },
            { title: "Scalability", text: "Highly scalable, suitable for large datasets and complex computations" },
            { title: "Quantum Resistance", text: "More resistant to quantum attacks due to reliance on hash functions" }
          ]
        }
      },
      {
        frontTitle: "SNARKs",
        frontEmoji: "🔒",
        frontContent: {
          title: "Succinct Non-interactive ARguments of Knowledge",
          points: [
            "Smaller proof size",
            "Trusted setup required",
            "Vulnerable to quantum"
          ]
        },
        backTitle: "SNARKs-KEY FEATURES",
        backEmoji: "🔒",
        backContent: {
          sections: [
            { title: "Transparency", text: "Requires a trusted setup" },
            { title: "Proof Generation Efficiency", text: "Efficient, but less scalable for very large computations" },
            { title: "Scalability", text: "Scalable, but less so compared to zk-STARKs" },
            { title: "Quantum Resistance", text: "Potentially vulnerable to quantum attacks due to elliptic curve cryptography" }
          ]
        }
      },
      {
        frontTitle: "Comparison",
        frontEmoji: "⚖️",
        frontContent: {
          title: "STARKs vs SNARKs",
          points: [
            "Different security models",
            "Trade-offs in performance",
            "Setup requirements vary"
          ]
        },
        backTitle: "Key Differences",
        backEmoji: "⚖️",
        backContent: {
          sections: [
            { title: "SNARKS", text: "SNARKs focusing on succinctness and non-interactivity" },
            { title: "STARKS", text: "STARKs emphasizing scalability and transparency" },
            { title: "Programming Language", text: "STARKs uses CAIRO while SNARKS uses Solidity" }
          ]
        }
      }
    ]
  },
  sw: {
    header: {
      title: "Tofauti ya STARKs na SNARKs",
      languageButton: "Badili Lugha"
    },
    cards: [
      {
        frontTitle: "STARKs",
        frontEmoji: "⚡",
        frontContent: {
          title: "Uhakiki wa Jukwaa wa Kiufundi na Uelewa",
          points: [
            "Salama dhidi ya kompyuta ya quantum",
            "Ada ya gesi za chini",
            "Nguvu ya kisasa ya kukokota"
          ]
        },
        backTitle: "SIFA MUHIMU ZA STARKS",
        backEmoji: "⚡",
        backContent: {
          sections: [
            { title: "Uwazi", text: "Uwazi kamili, hakuna mpangilio wa kuaminika unahitajika" },
            { title: "Ufanisi wa Uthibitishaji", text: "Ufanisi kwa mahesabu ya kubwa, inaweza kuongezeka kwa urahisi" },
            { title: "Uwezo wa Kupanuka", text: "Inaweza kupanuka sana, inafaa kwa data kubwa na mahesabu magumu" },
            { title: "Uhifadhi dhidi ya Kompyuta ya Quantum", text: "Imejengwa kwa njia ya kubuni ambapo iko salama zaidi dhidi ya shambulio la kompyuta ya quantum" }
          ]
        }
      },
      {
        frontTitle: "SNARKs",
        frontEmoji: "🔒",
        frontContent: {
          title: "Uhakiki wa Fupi Usiohitaji Mshirikiano",
          points: [
            "Ukubwa mdogo wa uthibitishi",
            "Inahitaji mpangilio wa kuaminika",
            "Inaweza kuathiriwa na kompyuta ya quantum"
          ]
        },
        backTitle: "SIFA MUHIMU ZA SNARKS",
        backEmoji: "🔒",
        backContent: {
          sections: [
            { title: "Uwazi", text: "Inahitaji mpangilio wa kuaminika" },
            { title: "Ufanisi wa Uthibitishaji", text: "Inafanya kazi vizuri, lakini haina uwezo mkubwa kwa mahesabu kubwa" },
            { title: "Uwezo wa Kupanuka", text: "Inaweza kupanuka, lakini si vile vile kama zk-STARKs" },
            { title: "Uhifadhi dhidi ya Kompyuta ya Quantum", text: "Inaweza kuathiriwa na shambulio la kompyuta ya quantum" }
          ]
        }
      },
      {
        frontTitle: "Linganisha",
        frontEmoji: "⚖️",
        frontContent: {
          title: "STARKs dhidi ya SNARKs",
          points: [
            "Mifumo tofauti ya usalama",
            "Malipo ya utendaji tofauti",
            "Mahitaji ya mpangilio tofauti"
          ]
        },
        backTitle: "Tofauti Muhimu",
        backEmoji: "⚖️",
        backContent: {
          sections: [
            { title: "SNARKS", text: "SNARKs zinalenga ufupi na kutogopeshana" },
            { title: "STARKS", text: "STARKs zinaonyesha uwezo wa kupanuka na uwazi" },
            { title: "Lugha ya Programu", text: "STARKs inatumia CAIRO, SNARKS inatumia Solidity" }
          ]
        }
      }
    ]
  }
};