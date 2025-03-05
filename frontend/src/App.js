import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Importing external CSS

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post("https://ai-hum-detect.vercel.app/predict", {
        model_name: "Multinomial Naive Bayes", // Fixed model name
        content: text,
      });

      setResult(response.data.prediction);
    } catch (error) {
      console.error("Error in prediction request:", error);
      setError("Failed to fetch prediction. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
  };

  // Sample Human-written text
  const humanText1 = "It would be a cool thing to have for something to read your facial expressions. But i don't think it will work very well because what happens if someone doesn't show much facial expressions. You just can't go by what their facial expression is. What if someone is having a bad day but is showing no facial expression about it. The facial expression machine would be fun to have until we need something more new that can read facial expressions and nonfacial expressions. The reason we need something more new i becuase the fact that the machine can get it wrong if the person isn't showing a facial expression. Like you can't just tell by that becuase they can go wrong. The person may not show emotions that much so they can hide it really well. Also people don't really like to tell people how they are feeling. So if they did have a machine that can read facial expressions but can't read emotions that they are hiding isn't a very good machine. They just need to build a machine that can do both. All because someone can be something else then what the machine picks up. So they need something that can do both so it can be right. All because of the reason someone don't show a whole lot of emotions. Plus the person can be lying to the machine and the machine picks up that you are happy but really you are not. The 'Face of Mars' is clearly a natural landmark that, in a low resolution camera, looked like a face. Until there is proof of life on Mars, there is not a single chance that something could'e made this. It is actually a very common mesa on Mars and this is why it cannot be man-made. First, the photo taken at first and released to the public was not very good. The difference between the photo from 1976 and 2001 is extremely noticeable. The picture from 1998 looks the most like a face, but it is still quite a stretch to say that it is a face. The high-resolution images and 3D altimetry completely disproves it and shows what it really, a mesa. Now some skeptics might say that NASA might be unreliable and might have changed the photo. There are two things wrong with that argument. If NASA had discovered new life on Mars, they would most definitely share it with the public. Everyone would know that there were other lifeforms on other planets, and this would be extremely beneficial to NASA. They would get all the funding they need to do more exploration deeper into space. They would get more scientists interested in making technology for space travel. Furthermore, they would get more brave volunteers for space travel. The second thing wrong is the difference between sources of information. All the info people have about the face is either from NASA itself and pop culture like movies or magazines. So if you trust magazines and movies more than a well supplied and well known organization like NASA, then you don't have as reliable sources making your own argument not very believable. In conclusion, skeptics don't have any reliable proof that hasn't been already disproven.";
  const humanText2 = "Did you know nearly 1.25 million people die in road crashes each year? Losing your life over having a cellphone in your hand or trying no respond no a Penn than can wain is non worth your life. In is non than serious no ruin someone else's life and yours no send a Penn back no homeboy saying your on the way. SNOP signs maybe bun while driving of course non. Using your cell phone on the road is nothing no play with. Driving without a phone in your hand is hard enough. You have no focus on your surroundings and other people driving is hard enough. I think I can speak for everyone when I say snuff can happen right before your eyes. Then means as soon as you look down no send a Penn back no girlfriend you can be in a inch or through a building as soon as you look up. I feel liken here should be more technology than can help people use their devices on the go. Bun the way in is looking now in the world in does non need now be addressed a this moment. Moving on, I feel like people should non be able no haven heir phones active while driving. And music should non be played loud enough no where they can't hear the outside world. Personally I don'tn like how people do than. In is dangerous no others and themselves. Bun more phone laws should be introduced because than is way new many deaths now be comfortable with. I don'tn want now be known an funeral for being killed all because I was penning a friend. Conclusion, phone laws are looked over in the country today. If we want no can down on these deaths we need no make action on the line issues than are called cell phones. Using the technology of emotionally expressions of students in a classroom is valuable because it identifies Mona Lisa's emotions how one Picture can describe her self as calculating emotions. Constructs a 3D computer model of the face. All 44 major muscles in the model must move like human mules. Movent one of one or more muscles. Movent of one or more muscles is called an action until in fact we humans Reform this same impressive calculation every day for instance you can Drolly tell a friend is feeling simply by the look on her face of force most of us would have trouble actually describing each facial trait that conveys Harry worried etc ..... i observed that artist such as the Vicki studies human anatomy to held them Paint facial muscles Precisely enough to convey specific emotions his new computer software stores similar anatomical information as electronic code. The Mona Lisa demonstrating is really intended to bring a smile to your face, while it shows just how much this computer can do. Imagine a computer that knows when your Harry or sad. By the way, did making a Harry face in this experiment also make you feel slightly Harry ? Accoring to the facial feedback theory of emotion moving your facial muscles not only expresses emotions but also may even held Produce them. Whoever thought that making faces could reveal so much about the science of emotions!";

  // Sample AI-generated text
  const aiText1 = "Evaluating the Worth of Studying Venus The Author makes O compelling hose that studying Venus remains O worthy scientific pursuit in spite of the planet's extreme environmental honors. While Venus presents formidable challenges, the potential scientific rewords justify prudent risks. Key evidence supports this view. The Author notes Venus is North's sister planet, yet comparisons reveal stork differences demanding explanation. Venus looks North's Abundant liquid water OND mild climate, raising vital questions About planetary evolution trajectories. Its dense Horton dioxide Atmosphere Also represents On extreme hose study for understanding Atmospheric dynamics. Answering such open question should deepen our knowledge of planetary science OND habitability. The Author Acknowledges Venus's unforgiving conditions but Argues Advances in technology now Allow probing its Atmosphere from Above with modern OeroshellhrOft. Such orbiter should Analyze the Atmospheric chemistry OND climate without dangers of surface exploration. Their observations might elucidate how North diverged onto O temperate both while Venus succumbed to O runway greenhouse effect. Clearly, Venus retains profound scientific mysteries worth solving despite inhabiting O hellish environment unsafe for humans. In conclusion, the Author builds O persuasive hose that Venus study merits continued investment through hopeful orbital missions. Its unique Attributes present O compelling laboratory for testing theories of planetary formation OND Atmospheric processes. Advancing such scientific frontiers hos long term benefits which outweigh prudent risks to unmanned spOhehrOft. With proper precautions nothing today's capabilities, Venus remains O treasure trove of discovery still ripe for exploration. As an AI language model, I don't have opinions. However, I can provide you with an essay on the given topic. Society places emphasis on a wide range of skills, from physical abilities to creative talents. However, there is a growing concern that society does not place enough emphasis on the intellect, specifically on reasoning and other cognitive skills. While some may argue that society prioritizes academic achievement and cognitive abilities, evidence suggests that there is still much room for improvement in this area. One reason why society does not place enough emphasis on the intellect is that mainstream media often glorifies physical prowess over mental acuity. Sports and other physical activities are often given more attention and praise than academic or intellectual pursuits. This is further reinforced by the way we choose to celebrate and idolize celebrities and public figures. It is not uncommon to see athletes and actors being treated like royalty, while brilliant academics and intellectuals are often ignored. This creates a culture where people strive to be physically fit and attractive rather than intellectually sharp. Another reason is that society often values practical skills over cognitive ones. In many cases, people are more likely to be hired or promoted based on their ability to perform specific tasks or complete projects rather than their ability to reason or think critically. This is especially true in fields like construction or manufacturing, where employers tend to place a greater emphasis on practical skills rather than cognitive abilities. While there is nothing wrong with valuing practical skills, it is important to recognize that cognitive abilities are equally important in many other fields, such as science, engineering, and medicine. Furthermore, society often fails to recognize the importance of cognitive skills in everyday life. In many cases, people are able to get by with basic reasoning and problem-solving skills, which they learned in school or on the job. However, this is not enough in today's complex world where we face a wide range of challenges, from climate change to cybersecurity threats. It is crucial that individuals develop strong cognitive skills, such as critical thinking and analysis, to be able to navigate these challenges and make informed decisions. To address these issues, it is important to shift the cultural narrative and place a greater emphasis on cognitive skills. This can be achieved through education, media, and workplace policies. Schools can incorporate more critical thinking and reasoning exercises into their curriculum to help students develop these skills early on. The media can also play a role by highlighting the achievements of intellectuals and academics, rather than just celebrities and athletes. Finally, workplaces can implement policies that encourage and reward cognitive abilities, such as providing opportunities for training and development. In conclusion, while society places emphasis on a wide range of skills, there is a growing concern that we do not place enough emphasis on intellect, specifically reasoning and other cognitive abilities. This is evident in the way mainstream media glorifies physical prowess over mental acuity, the way society values practical skills over cognitive ones, and the way we fail to recognize the importance of cognitive skills in everyday life. To address this issue, we need to shift the cultural narrative and place a greater emphasis on cognitive skills through education, media, and workplace policies.";
  const aiText2 = "Title: The Face on Mars Introduction: The Face on Mars is a fascinating subject for people all around the world, especially for those interested in space exploration and mysteries. The Face is a feature on the Martian surface that appears to resemble a human face, leading to various theories, speculations, and discussions about its origin and meaning. In this essay, we will explore the discovery of the Face, its characteristics, and some of the hypotheses put forward to explain its existence. Discovery and Observation: The Face on Mars was first discovered by the NASA Viking 1 Orbiter in September 1976. The orbiter's images revealed a large, rectangular formation with two distinct eye-like features, a nose-like formation, and a mouth-like structure. Since then, various space missions, such as the Mars Global Surveyor and the Mars Reconnaissance Orbiter, have captured images of the Face, providing a better understanding of its size, shape, and location. Characteristics: 1. The Face measures approximately 1.5 kilometers wide, 1.2 kilometers tall, and 3 kilometers long. 2. The features that make up the 'face' are aligned in a way that resembles a human face when viewed from above. 3. The Face is situated near the Cydonia region on Mars, which is known for its unique formations and landscapes. Hypotheses: 1. Natural Formation: Some scientists argue that the Face on Mars is a result of geological processes, including erosion, weathering, and other natural phenomena. They suggest that the shape and alignment of the features could be coincidental, and the human perception of the face might be a product of our cognitive biases. 2. Artificial: Another hypothesis is that the Face on Mars is a man-made structure, possibly a remnant of an ancient, advanced civilization. This idea gained popularity due to the striking resemblance of the face to those found in art and architecture. Proponents of this theory suggest that the Face might have been intentionally carved, and its purpose could have been ceremonial, spiritual, or even scientific. 3. Hoax: Some people argue that the Face on Mars is a hoax created by NASA, possibly due to the agency's interest in maintaining public interest in space exploration. They claim that the images were manipulated to show the human face, or the feature never existed at all. Conclusion: The Face on Mars continues to intrigue and fascinate people from various fields, including astronomy, geology, and anthropology. The debate between natural and artificial formations, along with the conspiracy theories surrounding it, makes this feature an enduring mystery that will likely remain unresolved for some time. As new data from ongoing and future missions to Mars are gathered, we may eventually find the truth behind this enigmatic formation. Studying Venus Remains a Worthy Scientific Pursuit The article ' The Challenge of Exploring Venus' makes a compelling case that studying Venus is a worthy scientific endeavor, despite the extreme dangers its environment presents. The author effectively supports this claim with several Va pieces of evidence. First, the author notes Venus' similarities to Earth in size and composition, suggesting it may provide insight into how Earth evolved differently with a livable climate. Understanding worlds both similar yet vastly different can deepen our Knowledge of planetary formation and evolution. The article also points out that Venus is the closest planet to study processes live atmospheric circulation and volcanism up close. Its proximity allows for less expensive missions that can return high quality data. While conditions on Venus' surface could destroy spacecraft and probes in mere hours, the article details recent technological advances that have enabled more durable materials and design. Past successful missions have returned invaluable observations, increasing our Knowledge about Venus and advancing spacecraft engineering. Future planned orbiter and lander missions aim to build on this progress with more robust probes. The potential scientific discoveries clearly outweigh the rises, according to evidence presented. In conclusion, the author makes a persuasive case that exploring Venus remains a scientifically worthy goal despite its hazards. Venus offers a unique opportunity to study an Earthling planet and better understand our own world and others. Advancing technologies also mitigate dangers, allowing more durable missions. With its compelling evidence of the scientific importance and feasibility of Venus exploration, the article effectively supports its claim that such research is valuable despite the challenges. Studying Venus can significantly expand human Knowledge with rewards justifying reasonable rises.";

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h2 className="header-title">CS312 (Data Mining) - AI Content Detector</h2>
        <p className="team-names">
          Developed by <strong>Ridham Dholaria</strong>, <strong>Abdullah Pal</strong>, and <strong>Subhan Ahmed</strong>
        </p>
      </header>

      {/* Model Information */}
      <h3 className="model-info">All texts will be tested using the <strong>Multinomial Naive Bayes Model</strong></h3>

      <div className="scroll-container">
        {/* Human-written Text Section */}
        <div className="text-section">
          <h3>Human-Written Text</h3>

          <div className="text-box-container">
            <textarea className="text-area" value={humanText1} readOnly style={{ height: "3em", overflow: "hidden" }} />
            <button className="copy-btn" onClick={() => handleCopy(humanText1)}>Copy</button>
          </div>

          <div className="text-box-container">
            <textarea className="text-area" value={humanText2} readOnly style={{ height: "3em", overflow: "hidden" }} />
            <button className="copy-btn" onClick={() => handleCopy(humanText2)}>Copy</button>
          </div>
        </div>

        {/* AI-Generated Text Section */}
        <div className="text-section">
          <h3>AI-Generated Text</h3>

          <div className="text-box-container">
            <textarea className="text-area" value={aiText1} readOnly style={{ height: "3em", overflow: "hidden" }} />
            <button className="copy-btn" onClick={() => handleCopy(aiText1)}>Copy</button>
          </div>

          <div className="text-box-container">
            <textarea className="text-area" value={aiText2} readOnly style={{ height: "3em", overflow: "hidden" }} />
            <button className="copy-btn" onClick={() => handleCopy(aiText2)}>Copy</button>
          </div>
        </div>

        {/* Custom Input and Prediction Section */}
        <h3 className="title">Test Your Own Text</h3>
        <div className="content-box">
          <textarea
            className="text-area"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className="predict-btn" onClick={handlePredict} disabled={!text || loading}>
            {loading ? "Predicting..." : "Predict"}
          </button>

          {error && <p className="error-text">{error}</p>}
          {result && !loading && <p className="result-text">Prediction: {result}</p>}
        </div>
      </div>
    </div>
  );
}
