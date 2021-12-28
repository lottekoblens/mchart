export default {
    name: "Ingrediënten",
    children: [
      {
        name: "polymers",
        functions: ["give strength", "adhesion", "coating", "binder", "growth substrate", "enforcement or scaffold in composites"],
        children: [
          {
            name: "polysaccharides",
            children: [
              {
                name: "cellulose",
                base: "plants",
                origin: ["cotton", "linen", "hemp", "jute", "flax", "ramie", "pineapple", "kenaf", "abaca", "henequen", "wood", "most plants"],
                size: 3938
              },
              {
                name: "pectin",
                base: "plants",
                origin: ["(peels of) apples", "apricots", "cherries", "passion fruit", "carrot", "citrus fruit", "rose hips", "guava", "quince", "plums", "gooseberries", "strawberries", "bananas", "grapes"],
                size: 3812
              },
              {
                name: "hemi-cellulose",
                base: "plants",
                origin: ["green beans", "rice straws"],
                size: 6714
              },
              {
                name: "starches",
                base: "plants",
                origin: ["corn", "wheat", "rice", 
                  "tapioca", "potato", "cassava"
                  ],
                size: 743
              },
              {
                name: "lignin",
                base: "plants",
                origin: [],
                size: 743
              },
              {
                name: "gums",
                base: "plants",
                origin: [],
                size: 743
              },
              {
                name: "cellulose",
                base: "microbial",
                origin: [],
                size: 743
              },
              {
                name: "gums (bacteria)",
                base: "microbial",
                origin: [],
                size: 743
              },
              {
                name: "gums (algea)",
                base: "microbial",
                origin: [],
                size: 743
              },
              {
                name: "fermented biomass",
                base: "microbial",
                origin: [],
                size: 743
              },
              {
                name: "chemically modified cellulose",
                base: "chemical compounds",
                origin: [],
                size: 743
              },
            ]
          },
          {
            name: "protein",
            children: [
              {
                name: "albumin",
                base: "animal",
                origin: [],
                size: 3534
              },
              {
                name: "silk",
                base: "animal",
                origin: [],
                size: 5731
              },
              {
                name: "keratin",
                base: "animal",
                origin: [],
                size: 7840
              },
              {
                name: "fibrin",
                base: "animal",
                origin: [],
                size: 5914
              },
              {
                name: "chitin (animal)",
                base: "animal",
                origin: [],
                size: 3416
              },
              {
                name: "collagen",
                base: "animal",
                origin: [],
                size: 3416
              },
              {
                name: "casein",
                base: "animal",
                origin: [],
                size: 3416
              },
              {
                name: "gluten",
                base: "plants",
                origin: [],
                size: 3416
              },
              {
                name: "zein",
                base: "plants",
                origin: [],
                size: 3416
              },
              {
                name: "soy",
                base: "plants",
                origin: [],
                size: 3416
              },
              {
                name: "chitin (fungal)",
                base: "plants",
                origin: [],
                size: 3416
              },
            ]
          },
          {
            name: "resins",
            children: [
              {
                name: "resin (animal)",
                base: "animal",
                origin: [],
                size: 7074
              },
              {
                name: "resin (plant)",
                base: "plants",
                origin: [],
                size: 3416
              },
            ]
          },
          {
            name: "elastomers & rubbers",
            children: [
              {
                name: "elastomer (plant)",
                base: "plants",
                origin: [],
                size: 7074
              },
              {
                name: "elastomer (synthetic)",
                base: "petrol-based",
                origin: [],
                size: 3416
              },
            ]
          }
        ]
      },
      {
        name: "plasticizers",
        functions: ["give flexibility to biopolymer recipes", "acts as a partial filler as well (in bioplastics, inks and paints"],
        children: [
          {
            name: "plasticizers",
            children: [
              {
                name: "poylols",
                base: "animal",
                origin: [],
                size: 1983
              },
              {
                name: "urea",
                base: "animal",
                origin: [],
                size: 2047
              },
              {
                name: "waxes",
                base: "animal",
                origin: [],
                size: 1375
              },
              {
                name: "other",
                base: "animal",
                origin: [],
                size: 8746
              },
              {
                name: "poylols",
                base: "plants",
                origin: [],
                size: 2202
              },
              {
                name: "lecithin",
                base: "plants",
                origin: [],
                size: 1382
              },
              {
                name: "waxes",
                base: "plants",
                origin: [],
                size: 1629
              },
              {
                name: "monosaccharides",
                base: "plants",
                origin: [],
                size: 1675
              },
              {
                name: "vegetable oils",
                base: "plants",
                origin: [],
                size: 2042
              },
              {
                name: "poylols",
                base: "microbial",
                origin: [],
                size: 2042
              },
              {
                name: "water",
                base: "inorganic",
                origin: [],
                size: 2042
              },
              {
                name: "poylols",
                base: "chemical compounds",
                origin: [],
                size: 2042
              },
              {
                name: "surfactants",
                base: "chemical compounds",
                origin: [],
                size: 2042
              },
              {
                name: "poylols",
                base: "petrol-based",
                origin: [],
                size: 2042
              },
              {
                name: "waxes & paraffines",
                base: "petrol-based",
                origin: [],
                size: 2042
              }
            ]
          }
        ]
      },
      {
        name: "pigments",
        functions: ["give color: note that note everything that has pigment acts well as a dye"],
        children: [
          {
            name: "animal",
            base: "animal",
            origin: [],
            size: 1759
          },
          {
            name: "tree (leaves, bark, seeds or fruits)",
            base: "plants",
            origin: [],
            size: 2165
          },
          {
            name: "plant",
            base: "plants",
            origin: [],
            size: 586
          },
          {
            name: "fungi",
            base: "plants",
            origin: [],
            size: 3331
          },
          {
            name: "micro-algae",
            base: "microbial",
            origin: [],
            size: 772
          },
          {
            name: "bacteria",
            base: "microbial",
            origin: [],
            size: 3322
          },
          {
            name: "fungi & yeast",
            base: "microbial",
            origin: [],
            size: 772
          },
          {
            name: "clays & earth",
            base: "inorganic",
            origin: [],
            size: 772
          },
          {
            name: "rocks",
            base: "inorganic",
            origin: [],
            size: 772
          },
          {
            name: "minerals",
            base: "inorganic",
            origin: [],
            size: 772
          },
        ]
      },
      {
        name: "pH modifiers",
        functions: ["change the pH of a liquid"],
        children: [
          {
            name: "acidic",
            base: "plants",
            origin: [],
            size: 1759
          },
          {
            name: "acidic",
            base: "microbial",
            origin: [],
            size: 2165
          },
          {
            name: "alkaline",
            base: "inorganic",
            origin: [],
            size: 586
          },
          {
            name: "acidic",
            base: "inorganic",
            origin: [],
            size: 3331
          },
          {
            name: "alkaline",
            base: "chemical compounds",
            origin: [],
            size: 772
          },
          {
            name: "acidic",
            base: "chemical compounds",
            origin: [],
            size: 3322
          }
        ]
      },
      {
        name: "surfactants",
        functions: ["change surface tension between liquids", "emulsifying, foaming"],
        children: [
          {
            name: "detergents",
            base: "chemical compounds",
            origin: [],
            size: 1759
          },
          {
            name: "alcohols",
            base: "chemical compounds",
            origin: [],
            size: 2165
          },
          {
            name: "monoglycerides",
            base: "chemical compounds",
            origin: [],
            size: 586
          }
        ]
      },
      {
        name: "fillers",
        functions: ["give extra volume to biopolymers and composites", "reduces shrinkage"],
        children: [
          {
            name: "animal",
            base: "animal",
            origin: [],
            size: 8833
          },
          {
            name: "plants",
            base: "plants",
            origin: [],
            size: 1732
          },
          {
            name: "powders",
            base: "inorganic",
            origin: [],
            size: 3623
          }
        ]
      },
      {
        name: "solvents & vehicles",
        functions: ["dissolve or extract a substance into a liquid"],
        children: [
          {
            name: "oils",
            base: "plants",
            origin: [],
            size: 4116
          },
          {
            name: "acidic solvent",
            base: "microbial",
            origin: [],
            size: 4116
          },
          {
            name: "water",
            base: "inorganic",
            origin: [],
            size: 4116
          },
          {
            name: "acidic solvent",
            base: "chemical compounds",
            origin: [],
            size: 4116
          },
          {
            name: "alcohols",
            base: "chemical compounds",
            origin: [],
            size: 4116
          },
          {
            name: "ketones",
            base: "chemical compounds",
            origin: [],
            size: 4116
          }
        ]
      },
      {
        name: "mordants, tannins, binders, redox agents",
        functions: ["attach pigment to fibre"],
        children: [
          {
            name: "tannins (animals)",
            base: "animal",
            origin: [],
            size: 1082
          },
          {
            name: "binder (animal)",
            base: "animal",
            origin: [],
            size: 1336
          },
          {
            name: "reduction agent for indigo",
            base: "animal",
            origin: [],
            size: 319
          },
          {
            name: "tannins (wood)",
            base: "plants",
            origin: [],
            size: 10498
          },
          {
            name: "tannins (plants)",
            base: "plants",
            origin: [],
            size: 2822
          },
          {
            name: "binder (plants)",
            base: "plants",
            origin: [],
            size: 9983
          },
          {
            name: "mordant",
            base: "plants",
            origin: [],
            size: 2213
          },
          {
            name: "reduction & oxidation (redox for indigo dye)",
            base: "plants",
            origin: [],
            size: 1681
          },
          {
            name: "reduction & oxidation (redox for indigo dye)",
            base: "microbial",
            origin: [],
            size: 1681
          },
          {
            name: "mineral mordants",
            base: "inorganic",
            origin: [],
            size: 1681
          },
          {
            name: "metal mordants",
            base: "inorganic",
            origin: [],
            size: 1681
          },
          {
            name: "reduction & oxidation (redox for indigo dye)",
            base: "inorganic",
            origin: [],
            size: 1681
          },
          {
            name: "chemical mordants",
            base: "chemical compounds",
            origin: [],
            size: 1681
          },
        ]
      },
      {
        name: "miscellaneous",
        functions: ["pH buffer (stabilizes pH)", "crosslinkers", "desinfectants"],
        children: [
          {
            name: "pH buffers",
            base: "animal",
            origin: [],
            size: 1616
          },
          {
            name: "crosslinker",
            base: "plants",
            origin: [],
            size: 1027
          },
          {
            name: "crosslinker",
            base: "microbial",
            origin: [],
            size: 3891
          },
          {
            name: "desinfectant",
            base: "microbial",
            origin: [],
            size: 891
          },
          {
            name: "pH buffers",
            base: "inorganic",
            origin: [],
            size: 2893
          },
          {
            name: "crosslinker",
            base: "chemical compounds",
            origin: [],
            size: 5103
          },
          {
            name: "pH buffers",
            base: "chemical compounds",
            origin: [],
            size: 3677
          },
          {
            name: "desinfectant",
            base: "chemical compounds",
            origin: [],
            size: 781
          }
        ]
      },
      {
        name: "growth media",
        functions: ["various functions in microbiological lab work"],
        children: [
          {
            name: "solidifying agent",
            base: "animal",
            origin: [],
            size: 2105
          },
          {
            name: "protein",
            base: "animal",
            origin: [],
            size: 1316
          },
          {
            name: "carbon (sugars)",
            base: "animal",
            origin: [],
            size: 3151
          },
          {
            name: "pH buffer",
            base: "animal",
            origin: [],
            size: 3770
          },
          {
            name: "nitrogen",
            base: "animal",
            origin: [],
            size: 2435
          },
          {
            name: "sulfur",
            base: "animal",
            origin: [],
            size: 4839
          },
          {
            name: "enzyme exciters (e.g. vitamin B)",
            base: "animal",
            origin: [],
            size: 1756
          },
          {
            name: "carbon (sugars)",
            base: "plants",
            origin: [],
            size: 4268
          },
          {
            name: "protein",
            base: "plants",
            origin: [],
            size: 1821
          },
          {
            name: "carbon (sugars)",
            base: "plants",
            origin: [],
            size: 5833
          },
          {
            name: "pH buffer",
            base: "plants",
            origin: [],
            size: 1821
          },
          {
            name: "nitrogen",
            base: "plants",
            origin: [],
            size: 1821
          },
          {
            name: "sulfur",
            base: "plants",
            origin: [],
            size: 1821
          },
          {
            name: "enzyme exciters (e.g. vitamin B)",
            base: "microbial",
            origin: [],
            size: 1821
          },
          {
            name: "solidifying agent",
            base: "microbial",
            origin: [],
            size: 1821
          },
          {
            name: "isotonic agent",
            base: "inorganic",
            origin: [],
            size: 1821
          },
          {
            name: "pH modifier",
            base: "chemical compounds",
            origin: [],
            size: 1821
          },
        ]
      }
    ]
  };