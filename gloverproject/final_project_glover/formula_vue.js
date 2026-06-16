const formulaApp = Vue.createApp({
  data() {
    return {
      selectedId: "everyday",
      categories: [
        {
          id: "everyday",
          label: "Everyday",
          heading: "Everyday Formulas",
          description: "Everyday outfits work best when they feel easy to wear but still intentional. These formulas focus on balance, repeatable basics, and simple styling details.",
          image: "formula1.jpg",
          alt:"Person wearing a black tank top, patterned loose pants, colorful sneakers, and layered silver jewelry while sitting near a graffiti-covered wall.",
          formulas: [
            "Fitted top + wide-leg pants + chunky shoes + shoulder bag",
            "Oversized tee + straight-leg jeans + sneakers + layered necklace",
            "Cropped sweater + cargo pants + boots + belt",
            "Band tee + dark skirt + tights + boots",
            "Long-sleeve mesh top + tank + loose pants + platform shoes",
            "Hoodie + mini skirt + knee socks + sneakers",
            "Baby tee + black trousers + loafers + chain necklace",
            "Oversized button-up + fitted tank + slim pants + boots",
            "Knit top + dark jeans + combat boots + crossbody bag",
            "Graphic tee + shorts + tall socks + sneakers"
          ],
          keyPieces: [
            "Dark basics that are easy to repeat",
            "One comfortable pair of everyday shoes",
            "A light outer layer for texture",
            "Accessories that make simple outfits feel finished"
          ]
        },
        {
          id: "school",
          label: "School",
          heading: "School Formulas",
          description: "School outfits usually need to balance comfort, movement, and practicality. These formulas are built around layers and repeatable pieces that still feel styled.",
          image: "formula2.jpg",
          alt: "Person wearing a black beanie, sunglasses, oversized black hoodie, loose jeans, and black shoes while leaning against a wall.",
          formulas: [
            "Oversized hoodie + loose pants + sneakers + tote bag",
            "Fitted long-sleeve top + cargo pants + boots + zip hoodie",
            "Band tee + black jeans + sneakers + flannel layer",
            "Sweater + plaid skirt + tights + loafers",
            "Tank + cardigan + straight-leg pants + boots",
            "Baby tee + maxi skirt + sneakers + messenger bag",
            "Fitted top + zip-up hoodie + loose jeans + chunky shoes",
            "Dark blouse + comfy trousers + flats or loafers + simple jewelry",
            "Graphic sweatshirt + mini skirt + tights + sneakers",
            "Oversized tee + biker shorts + crew socks + sneakers"
          ],
          keyPieces: [
            "Comfortable shoes for walking",
            "Layering pieces like hoodies and cardigans",
            "Bags that work with the outfit",
            "Pieces that can be repeated easily"
          ]
        },
        {
          id: "work",
          label: "Work / Polished",
          heading: "Work or Polished Formulas",
          description: "Polished outfits usually depend more on structure, clean silhouettes, and controlled styling details than on having lots of pieces.",
          image: "formula3.jpg",
          alt: "Person sitting on a stool wearing an all-black outfit with a long layered top, corset belt, black pants, and black boots.",
          formulas: [
            "Black fitted top + trousers + loafers + structured jacket",
            "Button-up shirt + dark skirt + tights + boots",
            "Knit sweater + straight-leg pants + flats + long coat",
            "Blouse + black jeans + ankle boots + simple silver jewelry",
            "Fitted mock neck + midi skirt + boots + clean handbag",
            "Dark cardigan + trousers + loafers + belt",
            "Simple tee + blazer + wide-leg pants + boots",
            "Long-sleeve top + structured skirt + tights + flats",
            "Dark blouse + cigarette pants + ankle boots + long necklace",
            "Fitted sweater + black trousers + loafers + tailored coat"
          ],
          keyPieces: [
            "Structured pants or skirts",
            "Simple dark tops",
            "Clean shoes with a polished shape",
            "One outer layer that sharpens the silhouette"
          ]
        },
        {
          id: "concert",
          label: "Concert",
          heading: "Concert Formulas",
          description: "Concert outfits can be stronger, bolder, and more dramatic. Shoes, texture, and accessories usually matter a lot here.",
          image: "formula4.jpg",
          alt: "Person wearing a black and pink dress with corset-style lacing, fishnet sleeves, a spiked choker, and a black tote bag.",
          formulas: [
            "Statement top + mini skirt + boots + layered jewelry",
            "Mesh top + bralette or tank + pants + platform boots",
            "Band tee + ripped jeans + combat boots + chains",
            "Corset-style top + wide-leg pants + boots + dark accessories",
            "Cropped tee + cargo pants + chunky shoes + studded belt",
            "Slip dress + fishnets + boots + oversized jacket",
            "Fitted black top + leather-look pants + boots + silver jewelry",
            "Oversized graphic tee + shorts + fishnets + boots",
            "Tank + mini skirt + arm warmers + platforms",
            "Lace top + dark bottoms + boots + dramatic outer layer"
          ],
          keyPieces: [
            "Statement shoes or boots",
            "Layers with texture like mesh or lace",
            "Jewelry and hardware details",
            "One bold focal piece"
          ]
        },
        {
          id: "warm",
          label: "Warm Weather",
          heading: "Warm Weather Formulas",
          description: "Warm weather outfits work best when they stay breathable without losing silhouette or personality.",
          image: "formula5.jpg",
          alt: "Person sitting on stairs wearing a sheer black dress layered over a black outfit.",
          formulas: [
            "Tank top + loose pants + sneakers + sunglasses",
            "Baby tee + mini skirt + sneakers + shoulder bag",
            "Oversized tee + shorts + crew socks + sneakers",
            "Cropped top + cargos + sandals or sneakers + bag",
            "Mesh top over tank + skirt + boots",
            "Sleeveless top + dark shorts + sneakers + belt",
            "Fitted tee + flowy skirt + sandals or sneakers",
            "Camisole + loose trousers + jewelry + flats",
            "Light button-up + tank + shorts + sneakers",
            "Short-sleeve knit + mini skirt + loafers"
          ],
          keyPieces: [
            "Breathable tops",
            "Lightweight bottoms",
            "Simple shoes that still fit the mood",
            "Minimal layers and accessories"
          ]
        },
        {
          id: "cold",
          label: "Cold Weather",
          heading: "Cold Weather Formulas",
          description: "Cold weather outfits can look more layered and dramatic, but they still need balance so they do not feel bulky or shapeless.",
          image: "formula6.jpg",
          alt: "Person sitting on outdoor steps wearing a black leather coat, plaid skirt, black knee socks, platform shoes, and a patterned scarf.",
          formulas: [
            "Fitted long-sleeve top + sweater + trousers + boots + coat",
            "Turtleneck + long skirt + tights + boots + scarf",
            "Hoodie + cargo pants + chunky shoes + oversized coat",
            "Thermal top + graphic tee + dark jeans + boots",
            "Sweater dress + tights + boots + long coat",
            "Knit top + wide-leg pants + platform boots + jacket",
            "Mesh top under sweater + skirt + tights + boots",
            "Button-up + cardigan + trousers + loafers + coat",
            "Long-sleeve tee + hoodie + cargos + sneakers + puffer",
            "Black basics + dramatic coat + boots + gloves"
          ],
          keyPieces: [
            "Warm outer layers",
            "Boots that work with tights or pants",
            "Layering tops with slim fits",
            "Scarves, gloves, and textured pieces"
          ]
        },
        {
          id: "comfort",
          label: "Comfort-Focused",
          heading: "Comfort-Focused Formulas",
          description: "Comfort-focused outfits do not have to feel plain. Repeating soft, practical pieces can still create a strong silhouette and clear style direction.",
          image: "formula7.jpg",
          alt: "Person wearing an oversized black fuzzy jacket, sheer layered skirt, and tall black platform boots with buckle straps.",
          formulas: [
            "Oversized tee + soft wide-leg pants + sneakers + hoodie",
            "Fitted tank + stretchy pants + cardigan + flats",
            "Knit sweater + leggings + boots + scarf",
            "Soft tee + loose trousers + sneakers + simple jewelry",
            "Oversized hoodie + biker shorts + socks + sneakers",
            "Stretchy dress + cardigan + boots",
            "Soft long-sleeve top + joggers + sneakers",
            "Tank + elastic-waist skirt + sandals or sneakers",
            "Loose button-up + soft pants + flats",
            "Breathable tee + cargos + sneakers + light jacket"
          ],
          keyPieces: [
            "Soft fabrics",
            "Stretchy or loose bottoms",
            "Supportive shoes",
            "Simple layers that do not feel restrictive"
          ]
        },
        {
          id: "beginner",
          label: "Beginner",
          heading: "Beginner Formulas",
          description: "Beginner formulas are good starting points when you want outfits to feel more intentional without being too complicated.",
          image: "formula08.jpg",
          alt: "Person sitting on stairs wearing a black mesh top, black flared pants, platform shoes, and purple hair.",
          formulas: [
            "Black top + black pants + boots",
            "Graphic tee + jeans + sneakers",
            "Hoodie + cargo pants + chunky shoes",
            "Fitted top + skirt + boots",
            "Oversized sweater + dark pants + sneakers",
            "Tank + trousers + boots",
            "Long-sleeve top + jeans + jacket",
            "Tee + mini skirt + tights + boots",
            "Blouse + trousers + loafers",
            "Oversized tee + shorts + sneakers"
          ],
          keyPieces: [
            "One pair of dark shoes",
            "Repeatable tops and bottoms",
            "A basic outer layer",
            "One simple accessory type"
          ]
        }
      ]
    };
  },
  computed: {
    selectedCategory() {
      return this.categories.find(function (category) {
        return category.id === this.selectedId;
      }, this);
    }
  }
});

formulaApp.mount("#vueFormulaApp");