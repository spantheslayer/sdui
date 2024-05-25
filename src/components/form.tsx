"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import generateImage from "../sd";

interface FormData {
  ethnicity: string;
  age: string;
  hairColor: string;
  hairStyle: string;
  gender: string;
  platform: string;
}

export default function Form(): JSX.Element {
  const [formData, setFormData] = useState({
    ethnicity: "",
    age: "",
    hairColor: "",
    hairStyle: "",
    gender: "",
    platform: "",
  });

  const [step, setStep] = useState<number>(1);
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    try {
      setLoading(true);
      const imageDataResult = await generateImage(formData);
      setImageData(imageDataResult);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <form id="multiStepForm" onSubmit={handleSubmit}>
        {/* Page 1: Ethnicity */}
        {step === 1 && (
          <div className="step active">
            <h4>What is your ethnicity?</h4>
            <label>
              <input
                type="radio"
                name="ethnicity"
                value="arabic"
                required
                onChange={(e) => handleChange(e, "ethnicity")}
              />{" "}
              Arabic
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="ethnicity"
                value="asian"
                onChange={(e) => handleChange(e, "ethnicity")}
              />{" "}
              Asian
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="ethnicity"
                value="caucasian"
                onChange={(e) => handleChange(e, "ethnicity")}
              />{" "}
              Caucasian
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="ethnicity"
                value="afro-american"
                onChange={(e) => handleChange(e, "ethnicity")}
              />{" "}
              Afro American
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="ethnicity"
                value="latina"
                onChange={(e) => handleChange(e, "ethnicity")}
              />{" "}
              Latina
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="ethnicity"
                value="slavic"
                onChange={(e) => handleChange(e, "ethnicity")}
              />{" "}
              Slavic
            </label>
            <br />
          </div>
        )}

        {/* Page 2: Age */}
        {step === 2 && (
          <div className="step active">
            <h4>What is your age?</h4>
            <label>
              <input
                type="radio"
                name="age"
                value="18"
                required
                onChange={(e) => handleChange(e, "age")}
              />{" "}
              18
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="age"
                value="20"
                onChange={(e) => handleChange(e, "age")}
              />{" "}
              20
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="age"
                value="30"
                onChange={(e) => handleChange(e, "age")}
              />{" "}
              30
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="age"
                value="40"
                onChange={(e) => handleChange(e, "age")}
              />{" "}
              40
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="age"
                value="50"
                onChange={(e) => handleChange(e, "age")}
              />{" "}
              50
            </label>
            <br />
          </div>
        )}

        {/* Page 3: Hair Color */}
        {step === 3 && (
          <div className="step active">
            <h4>What is your hair color?</h4>
            <label>
              <input
                type="radio"
                name="hairColor"
                value="black"
                required
                onChange={(e) => handleChange(e, "hairColor")}
              />{" "}
              Black
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairColor"
                value="blonde"
                required
                onChange={(e) => handleChange(e, "hairColor")}
              />{" "}
              Blonde
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairColor"
                value="red"
                required
                onChange={(e) => handleChange(e, "hairColor")}
              />{" "}
              Red
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairColor"
                value="white"
                required
                onChange={(e) => handleChange(e, "hairColor")}
              />{" "}
              White
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairColor"
                value="blue"
                required
                onChange={(e) => handleChange(e, "hairColor")}
              />{" "}
              Blue
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairColor"
                value="green"
                required
                onChange={(e) => handleChange(e, "hairColor")}
              />{" "}
              Green
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairColor"
                value="pink"
                required
                onChange={(e) => handleChange(e, "hairColor")}
              />{" "}
              Pink
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairColor"
                value="brunette"
                required
                onChange={(e) => handleChange(e, "hairColor")}
              />{" "}
              Brunette
            </label>
            <br />
          </div>
        )}

        {/* Page 4: Hair Style */}
        {step === 4 && (
          <div className="step active">
            <h4>What is your hair style?</h4>
            <label>
              <input
                type="radio"
                name="hairStyle"
                value="pigtails"
                required
                onChange={(e) => handleChange(e, "hairStyle")}
              />{" "}
              Pigtails
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairStyle"
                value="ponytail"
                onChange={(e) => handleChange(e, "hairStyle")}
              />{" "}
              Ponytail
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairStyle"
                value="pixie"
                onChange={(e) => handleChange(e, "hairStyle")}
              />{" "}
              Pixie
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairStyle"
                value="bun"
                onChange={(e) => handleChange(e, "hairStyle")}
              />{" "}
              Bun
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairStyle"
                value="braids"
                onChange={(e) => handleChange(e, "hairStyle")}
              />{" "}
              Braids
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairStyle"
                value="curly"
                onChange={(e) => handleChange(e, "hairStyle")}
              />{" "}
              Curly
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairStyle"
                value="rasta"
                onChange={(e) => handleChange(e, "hairStyle")}
              />{" "}
              Rasta
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairStyle"
                value="short"
                onChange={(e) => handleChange(e, "hairStyle")}
              />{" "}
              Short
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="hairStyle"
                value="bald"
                onChange={(e) => handleChange(e, "hairStyle")}
              />{" "}
              Bald
            </label>
            <br />
          </div>
        )}
        {/* Page 5: Gender */}
        {step === 5 && (
          <div className="step active">
            <h4>What is your gender?</h4>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                required
                onChange={(e) => handleChange(e, "gender")}
              />{" "}
              Male
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => handleChange(e, "gender")}
              />{" "}
              Female
            </label>
            <br />
          </div>
        )}

        {/* Page 6: Platform */}
        {step === 6 && (
          <div className="step active">
            <h4>Where do you want to use the model?</h4>
            <label>
              <input
                type="radio"
                name="platform"
                value="Instagram"
                required
                onChange={(e) => handleChange(e, "platform")}
              />{" "}
              Instagram
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="platform"
                value="Facebook"
                onChange={(e) => handleChange(e, "platform")}
              />{" "}
              Facebook
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="platform"
                value="Tiktok"
                onChange={(e) => handleChange(e, "platform")}
              />{" "}
              Tiktok
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="platform"
                value="other"
                onChange={(e) => handleChange(e, "platform")}
              />{" "}
              Other
            </label>
            <br />
          </div>
        )}

        <div className="navigation">
          {step > 1 && (
            <button type="button" id="prevBtn" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 6 ? (
            <button type="button" id="nextBtn" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
      {loading && <div>Loading...</div>}
      {imageData && !loading && (
        <div>
          <h2>Generated Image:</h2>
          <img
            src={`data:image/png;base64,${imageData}`}
            alt="Generated Image"
          />
        </div>
      )}
    </div>
  );
}
