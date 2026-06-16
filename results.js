const params = new URLSearchParams(window.location.search);

const name = params.get("userName") || "Not provided";
const style = params.get("styleVibe") || "Not provided";
const occasion = params.get("occasion") || "Not provided";
const comfort = params.get("comfortPriority") || "Not provided";
const color = params.get("colorPalette") || "Not provided";
const boldness = params.get("boldness") || "Not provided";
const accessory = params.get("accessory") || "Not provided";
const favorite = params.get("favoritePiece") || "Not provided";
const avoid = params.get("avoidPiece") || "Nothing listed";

document.getElementById("resultName").textContent = name;
document.getElementById("resultStyle").textContent = style;
document.getElementById("resultOccasion").textContent = occasion;
document.getElementById("resultComfort").textContent = comfort;
document.getElementById("resultColor").textContent = color;
document.getElementById("resultBoldness").textContent = boldness;
document.getElementById("resultAccessory").textContent = accessory;
document.getElementById("resultFavorite").textContent = favorite;
document.getElementById("resultAvoid").textContent = avoid;

let basePiece = "Start with a dark base outfit";
let occasionDetail = "that works for your plans";
let comfortDetail = "and choose pieces that feel comfortable to wear";
let colorDetail = "";
let boldnessDetail = "";
let accessoryDetail = "";
let avoidDetail = "";

if (style === "goth") {
  basePiece = "Start with black clothing, dramatic layers, boots, and darker textures";
} else if (style === "punk") {
  basePiece = "Start with a graphic or distressed piece, darker bottoms, chunky shoes, and rougher details";
} else if (style === "streetwear") {
  basePiece = "Start with an oversized top, loose bottoms, sneakers, and one strong statement layer";
} else if (style === "grunge") {
  basePiece = "Start with relaxed layers, darker basics, worn-in textures, and comfortable shoes";
} else if (style === "emo") {
  basePiece = "Start with a fitted or graphic top, dark bottoms, layered accessories, and bold shoes";
} else if (style === "industrial") {
  basePiece = "Start with black basics, hardware details, straps, buckles, heavy shoes, and structured layers";
}

if (occasion === "school") {
  occasionDetail = "For school, keep the outfit practical with comfortable shoes and a bag that works for your day";
} else if (occasion === "work") {
  occasionDetail = "For work, keep the outfit more polished with cleaner lines, simple layers, and less bulky accessories";
} else if (occasion === "concert") {
  occasionDetail = "For a concert, make the outfit bolder with stronger shoes, texture, and accessories";
} else if (occasion === "date") {
  occasionDetail = "For a date, choose one piece that feels special but still comfortable enough to relax in";
} else if (occasion === "going out") {
  occasionDetail = "For going out, add a statement piece or accessory that makes the outfit feel more intentional";
} else if (occasion === "lazy day") {
  occasionDetail = "For a lazy day, keep the outfit soft, easy to move in, and based around pieces you already like wearing";
} else if (occasion === "everyday") {
  occasionDetail = "For everyday wear, keep the outfit repeatable, comfortable, and easy to style again";
}

if (comfort === "loose fit") {
  comfortDetail = "Use looser pieces like oversized tops, wide-leg pants, or relaxed layers";
} else if (comfort === "stretchy") {
  comfortDetail = "Choose stretchy pieces so the outfit has style without feeling restrictive";
} else if (comfort === "soft fabrics") {
  comfortDetail = "Look for soft fabrics so the outfit feels easier to wear for longer periods";
} else if (comfort === "breathable") {
  comfortDetail = "Keep the outfit breathable with lighter layers and less heavy fabric";
} else if (comfort === "warm layers") {
  comfortDetail = "Build the outfit with warm layers like cardigans, jackets, tights, or coats";
} else if (comfort === "easy to move in") {
  comfortDetail = "Choose pieces that let you move easily, especially shoes and bottoms";
}

if (color !== "Not provided") {
  colorDetail = " Use your " + color + " palette to make the outfit feel more cohesive.";
}

if (boldness === "subtle") {
  boldnessDetail = " Keep the look subtle by using one alternative detail instead of making every piece dramatic.";
} else if (boldness === "balanced") {
  boldnessDetail = " Keep the look balanced by pairing one statement piece with simpler basics.";
} else if (boldness === "dramatic") {
  boldnessDetail = " Make the look more dramatic with stronger shoes, layered accessories, or a bold outer layer.";
}

if (accessory !== "Not provided") {
  accessoryDetail = " Add your favorite accessory, " + accessory + ", to make the outfit feel more personal.";
}

if (avoid !== "Nothing listed" && avoid.trim() !== "") {
  avoidDetail = " Since you want to avoid " + avoid + ", choose a piece that gives a similar vibe without that discomfort.";
}

let recommendation = basePiece + ". " +
  occasionDetail + ". " +
  comfortDetail + ". " +
  "Build the outfit around your favorite piece: " + favorite + "." +
  colorDetail +
  boldnessDetail +
  accessoryDetail +
  avoidDetail;

document.getElementById("recommendationText").textContent = recommendation;