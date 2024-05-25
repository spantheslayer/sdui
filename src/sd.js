const axios = require("axios");

async function generateImage(formData) {
  try {
    const response = await axios.post(
      "https://21c1afcd88366c89e6.gradio.live/sdapi/v1/txt2img",
      {
        prompt: JSON.stringify(formData), // Sending form data as JSON string
        steps: 50,
      }
    );
    console.log("Response from image generation script:", response.data);

    // Return the image data
    return response.data.images[0];
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}

module.exports = generateImage;

// const axios = require("axios");
// const fs = require("fs");
// const path = require("path");

// async function generateImage(formData) {
//   try {
//     const response = await axios.post(
//       "https://21c1afcd88366c89e6.gradio.live/sdapi/v1/txt2img",
//       {
//         prompt: JSON.stringify(formData), // Sending form data as JSON string
//         steps: 5,
//       }
//     );
//     console.log("Response from image generation script:", response.data);

//     // If you need to save the image, you can do it here
//     const responseData = response.data;
//     const imageData = Buffer.from(responseData.images[0], "base64");
//     fs.writeFileSync(path.join(__dirname, "output.png"), imageData);
//     console.log("Image saved successfully.");

//     return response.data; // Optionally return data if needed
//   } catch (error) {
//     console.error("Error generating image:", error);
//     throw error;
//   }
// }

// module.exports = generateImage;
