export default {
    name: "ingrediënten",
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
                origin: ["cotton", "linen", "hemp", "jute", "flax","ramie", "pineapple", "kenaf", "abaca", "henequen","wood", "most plants"],
                size: 3938
              },
              {
                name: "pectin",
                base: "plants",
                origin: ["(peels of) apples", "apricots", "cherries","passion fruit", "carrot", "citrus fruit", "rose hips", "guava", "quince", "plums", "gooseberries","strawberries", "bananas", "grapes"],
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
                origin: ["corn", "wheat", "rice", "tapioca", "potato", "cassava"],
                size: 743
              },
              {
                name: "lignin",
                base: "plants",
                origin: ["wood", "bark", "plant stems", "potato tubers", "rice straws", "jute", "hemp", "cotton", "wheat straw", "pine straw", "flax fibre", "alfalfa"],
                size: 743
              },
              {
                name: "gums",
                base: "plants",
                origin: ["gum arabic", "tara gum", "guar gum"],
                size: 743
              },
              {
                name: "cellulose",
                base: "microbial",
                origin: ["acetobacter xylinum (kombucha)", "mycelium"],
                size: 743
              },
              {
                name: "gums (bacteria)",
                base: "microbial",
                origin: ["xanthan", "gellan", "bacterial alginate (azotobacter vinelandii"],
                size: 743
              },
              {
                name: "gums (algea)",
                base: "microbial",
                origin: ["alginate", "agar", "carrageenan"],
                size: 743
              },
              {
                name: "fermented biomass",
                base: "microbial",
                origin: ["PLA (corn)"],
                size: 743
              },
              {
                name: "chemically modified cellulose",
                base: "chemical compounds",
                origin: ["Carboxy Methyl Cellulose (CMC)", "Methyl Cellulose (MC)"],
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
                origin: ["blood", "beef", "eggs"],
                size: 3534
              },
              {
                name: "silk",
                base: "animal",
                origin: ["silk", "spider silk"],
                size: 5731
              },
              {
                name: "keratin",
                base: "animal",
                origin: ["wool", "hair", "nails", "feathers", "fur"],
                size: 7840
              },
              {
                name: "fibrin",
                base: "animal",
                origin: ["protein found in blood"],
                size: 5914
              },
              {
                name: "chitin (animal)",
                base: "animal",
                origin: ["exoskeletons of crustaceans", "crabs", "shrimps"],
                size: 3416
              },
              {
                name: "collagen",
                base: "animal",
                origin: ["gelatin", "skin, bones and connective tissue of e.g.chicken, pig, fish, cow"],
                size: 3416
              },
              {
                name: "casein",
                base: "animal",
                origin: ["milk"],
                size: 3416
              },
              {
                name: "gluten",
                base: "plants",
                origin: ["wheat", "barley", "rye", "oats", "spelt", "khorasan", "emmer", "einkorn", "triticale"],
                size: 3416
              },
              {
                name: "zein",
                base: "plants",
                origin: ["corn"],
                size: 3416
              },
              {
                name: "soy",
                base: "plants",
                origin: ["soy beans"],
                size: 3416
              },
              {
                name: "chitin (fungal)",
                base: "plants",
                origin: ["fungal mycelium"],
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
                origin: ["shellac"],
                size: 7074
              },
              {
                name: "resin (plant)",
                base: "plants",
                origin: ["copal", "kauri gum", "turpentine", "spinifex", "sandarac", "cabdanum", "mastic", "urushi", "arabic gum"],
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
                origin: ["synthetic latex"],
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
                name: "poylols",
                base: "animal",
                origin: ["animal glycerine (cow, sheep)"],
                size: 1983
              },
              {
                name: "urea",
                base: "animal",
                origin: ["urine"],
                size: 2047
              },
              {
                name: "waxes",
                base: "animal",
                origin: ["bees wax"],
                size: 1375
              },
              {
                name: "other",
                base: "animal",
                origin: ["honey"],
                size: 8746
              },
              {
                name: "poylols",
                base: "plants",
                origin: ["vegetable glycerine (soy, palm, coconut )"],
                size: 2202
              },
              {
                name: "lecithin",
                base: "plants",
                origin: ["soy"],
                size: 1382
              },
              {
                name: "waxes",
                base: "plants",
                origin: ["candellila", "carnauba"],
                size: 1629
              },
              {
                name: "monosaccharides",
                base: "plants",
                origin: ["glucose", "mannose", "fructose", "sucrose"],
                size: 1675
              },
              {
                name: "vegetable oils",
                base: "plants",
                origin: ["sunflower oil", "rice oil"],
                size: 2042
              },
              {
                name: "poylols",
                base: "microbial",
                origin: ["microbial glycerine (yeast , algae)", "sugar alcohols"],
                size: 2042
              },
              {
                name: "water",
                base: "inorganic",
                origin: ["water"],
                size: 2042
              },
              {
                name: "poylols",
                base: "chemical compounds",
                origin: ["sorbitol", "mannitol", "xylitol", " ethylene- diethylene- triethylene, - tetraethylene and polyethylene glycol", "propylene glycol"],
                size: 2042
              },
              {
                name: "surfactants",
                base: "chemical compounds",
                origin: ["soap", "glycerol monostrearate"],
                size: 2042
              },
              {
                name: "poylols",
                base: "petrol-based",
                origin: ["petroleum-based glycerine"],
                size: 2042
              },
              {
                name: "waxes & paraffines",
                base: "petrol-based",
                origin: ["paraffine (petrol)"],
                size: 2042
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
            origin: ["cochineal and lac insects", "octopus ink (sepia)", "murex snail","blood", "bone black", "egg shells"],
            size: 1759
          },
          {
            name: "tree (leaves, bark, seeds or fruits)",
            base: "plants",
            origin: ["campeche", "brazilwood", "old fustic", "sandalwood", "birch", "chestnut", "acacia (cutch)", "bixa orellana (annatto)", "terminalia chebula (myrobalan nuts)", "oak bark", "pine (branches)", "quebracho", "walnut (leaves)", "buckthorn (bark)"],
            size: 2165
          },
          {
            name: "plant",
            base: "plants",
            origin: ["alkanet", "turmeric root", "onion skin",  "madder", "oak/wasp cherry galls", "avocado stones and skin", "grape black", "sap green", "black beans", "henna", "mahonia aquifolia (branches)", "marigold", "pomegranate (rind)", "indigo tinctoria", "woad", "weld", "goldenrod", "rhubarb (roots)", "saint john's wort", "chamomile", "coreopsis", "saw wort", "eucalyptus", "safflower", "greenweed"],
            size: 586
          },
          {
            name: "fungi",
            base: "plants",
            origin: ["phaeolus schweinitzii", "hypholoma fasciculare", "scleroderma aerolatum", "cortinarius (semi)sanguineus", "hapalopilus rutilans", "paxillus involutus", "inonotus hispidus", "hydnellum geogenium", "sarcodon squamosus", "polyozellus multiplex", "clavariadelphus occidentalis", "gyromitra infula", "anthracophyllum lateritium", "cortinarius marylandensis"],
            size: 3331
          },
          {
            name: "micro-algae",
            base: "microbial",
            origin: ["chlorella", "arthrospiria platensis (spirulina)", "bioluminescent dinaflagellates", "haematococcus pluvialis", "porphyridium purpureum", "dunaliella salina"],
            size: 772
          },
          {
            name: "bacteria",
            base: "microbial",
            origin: ["serratia marcescens", "rhodococcus rhodochrous", "janthinobacterium lividum", "vogesella indigofera", "micrococcus luteus", "sarcina aurantiaca", "arthrobacter agilis", "streptomyces coelicolor", "kluyveromyces marxianus", "burkholderia cepacia", "monascus roseus", "pacilmyces farinosus", "allochromatum vinosum"],
            size: 3322
          },
          {
            name: "fungi & yeast",
            base: "microbial",
            origin: ["monascus purpureus", "chlorociboria aeruginascens"],
            size: 772
          },
          {
            name: "clays & earth",
            base: "inorganic",
            origin: ["ochre", "sienna", "umber", "green earth"],
            size: 772
          },
          {
            name: "rocks",
            base: "inorganic",
            origin: ["lapis lazuli"],
            size: 772
          },
          {
            name: "minerals",
            base: "inorganic",
            origin: ["vicenza earth", "azurite", "turkoise"],
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
            origin: ["hibiscus flowers", "fruit (lemon) juice]"],
            size: 1759
          },
          {
            name: "acidic",
            base: "microbial",
            origin: ["vinegar"],
            size: 2165
          },
          {
            name: "alkaline",
            base: "inorganic",
            origin: ["chalk", "slaked lime"],
            size: 586
          },
          {
            name: "acidic",
            base: "inorganic",
            origin: ["alum"],
            size: 3331
          },
          {
            name: "alkaline",
            base: "chemical compounds",
            origin: ["sodium carbonate", "sodium bicarbonate", "calcium carbonate", "ammonia"],
            size: 772
          },
          {
            name: "acidic",
            base: "chemical compounds",
            origin: ["citric acid", "cream of tartar", "alum"],
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
            origin: ["hand soap", "dishwashing soap"],
            size: 1759
          },
          {
            name: "alcohols",
            base: "chemical compounds",
            origin: ["methylated spirit "],
            size: 2165
          },
          {
            name: "monoglycerides",
            base: "chemical compounds",
            origin: ["glycerol monostearate"],
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
            origin: ["egg shells", "hair", "fur", "feathers", "bones"],
            size: 8833
          },
          {
            name: "plants",
            base: "plants",
            origin: ["stems", "leaves", "sawdust", "glycerine"],
            size: 1732
          },
          {
            name: "powders",
            base: "inorganic",
            origin: ["calcium carbonate", "activated coal",],
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
            origin: ["sunflower oil", "rice oil", "linseed oil"],
            size: 4116
          },
          {
            name: "acidic solvent",
            base: "microbial",
            origin: ["vinegar", "cleaning vinegar"],
            size: 4116
          },
          {
            name: "water",
            base: "inorganic",
            origin: ["hot/cold", "rainwater", "distilled water", "tap water"],
            size: 4116
          },
          {
            name: "acidic solvent",
            base: "chemical compounds",
            origin: ["citric acid"],
            size: 4116
          },
          {
            name: "alcohols",
            base: "chemical compounds",
            origin: ["ethanol", "isopropyl alcohol", "diethyl ether"],
            size: 4116
          },
          {
            name: "ketones",
            base: "chemical compounds",
            origin: ["aceton"],
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
            origin: ["brains", "urine"],
            size: 1082
          },
          {
            name: "binder (animal)",
            base: "animal",
            origin: ["milk"],
            size: 1336
          },
          {
            name: "reduction agent for indigo",
            base: "animal",
            origin: ["urine"],
            size: 319
          },
          {
            name: "tannins (wood)",
            base: "plants",
            origin: ["oak bark", "birch bark", "mango bark", "cutch", "terminalia chebula (myrobalan nuts)", "quebracho"],
            size: 10498
          },
          {
            name: "tannins (plants)",
            base: "plants",
            origin: ["chestnuts", "tea", "juniper", "rhubarb", "staghorn sumac", "pomegranate", "aloe vera", "acorns", "oak galls", "tara pulver", "rhubarb leaves"],
            size: 2822
          },
          {
            name: "binder (plants)",
            base: "plants",
            origin: ["vegetable milk (e.g. soy milk, almond, oats)"],
            size: 9983
          },
          {
            name: "mordant",
            base: "plants",
            origin: ["symplocos", "club moss", "rhubarb leaves (animal fibers - oxalic acid)"],
            size: 2213
          },
          {
            name: "reduction & oxidation (redox for indigo dye)",
            base: "plants",
            origin: ["wood ash lye"],
            size: 1681
          },
          {
            name: "reduction & oxidation (redox for indigo dye)",
            base: "microbial",
            origin: ["sugar", "yeast"],
            size: 1681
          },
          {
            name: "mineral mordants",
            base: "inorganic",
            origin: ["alum (potassium aluminium sulfate)"],
            size: 1681
          },
          {
            name: "metal mordants",
            base: "inorganic",
            origin: ["copper (copper sulfate)", "iron (iron sulfate)"],
            size: 1681
          },
          {
            name: "reduction & oxidation (redox for indigo dye)",
            base: "inorganic",
            origin: ["sodium hydrosulphate", "sodium hydroxide", "ferrous sulfate"],
            size: 1681
          },
          {
            name: "chemical mordants",
            base: "chemical compounds",
            origin: ["alum (alum, potassium aluminium sulfate dodecahydrate, alum potash)", "aluminium acetate"],
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
            origin: ["sea shells", "mussel shells", "egg shells"],
            size: 1616
          },
          {
            name: "crosslinker",
            base: "plants",
            origin: ["lemon juice (for starches)", "orange juice (for alginate)"],
            size: 1027
          },
          {
            name: "crosslinker",
            base: "microbial",
            origin: ["vinegar (for starches)"],
            size: 3891
          },
          {
            name: "desinfectant",
            base: "microbial",
            origin: ["denatured alcohol 70%"],
            size: 891
          },
          {
            name: "pH buffers",
            base: "inorganic",
            origin: ["chalk", "gypsum"],
            size: 2893
          },
          {
            name: "crosslinker",
            base: "chemical compounds",
            origin: ["calcium chloride (for alginate)", "citric acid (for starches)"],
            size: 5103
          },
          {
            name: "pH buffers",
            base: "chemical compounds",
            origin: ["calcium carbonate", "calcium hydroxide"],
            size: 3677
          },
          {
            name: "desinfectant",
            base: "chemical compounds",
            origin: ["hypocholorite bleach (10% solution)"],
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
            origin: ["gelatine"],
            size: 2105
          },
          {
            name: "protein",
            base: "animal",
            origin: ["peptone", "tryptone beef broth", "meat extract"],
            size: 1316
          },
          {
            name: "carbon (sugars)",
            base: "animal",
            origin: ["honey", "peptone"],
            size: 3151
          },
          {
            name: "pH buffer",
            base: "animal",
            origin: ["peptone"],
            size: 3770
          },
          {
            name: "nitrogen",
            base: "animal",
            origin: ["peptone"],
            size: 2435
          },
          {
            name: "sulfur",
            base: "animal",
            origin: ["peptone"],
            size: 4839
          },
          {
            name: "enzyme exciters (e.g. vitamin B)",
            base: "animal",
            origin: ["beef extract", "meat extract"],
            size: 1756
          },
          {
            name: "carbon (sugars)",
            base: "plants",
            origin: ["malt extract", "glucose", "dextrose", "corn syrup", "sugar", "potato"],
            size: 4268
          },
          {
            name: "protein",
            base: "plants",
            origin: ["vegetable peptone"],
            size: 1821
          },
          {
            name: "carbon (sugars)",
            base: "plants",
            origin: ["vegetable peptone", "starches", "dextrose", "maltose", "glycerine"],
            size: 5833
          },
          {
            name: "pH buffer",
            base: "plants",
            origin: ["vegetable peptone"],
            size: 1821
          },
          {
            name: "nitrogen",
            base: "plants",
            origin: ["vegetable peptone"],
            size: 1821
          },
          {
            name: "sulfur",
            base: "plants",
            origin: ["vegetable peptone"],
            size: 1821
          },
          {
            name: "enzyme exciters (e.g. vitamin B)",
            base: "microbial",
            origin: ['yeast'],
            size: 1821
          },
          {
            name: "solidifying agent",
            base: "microbial",
            origin: ['agar'],
            size: 1821
          },
          {
            name: "isotonic agent",
            base: "inorganic",
            origin: ["salt", "glycerol", "mannitol", "gypsum", "calsium carbonate"],
            size: 1821
          },
          {
            name: "pH modifier",
            base: "chemical compounds",
            origin: ["citric acid", "tartaric acid (acidic)", "sodium hydroxide (alkaline)"],
            size: 1821
          },
        ]
      }
    ]
  };