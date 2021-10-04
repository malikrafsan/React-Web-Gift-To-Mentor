import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Story = () => {
  const [sectionNumber, setSectionNumber] = useState(1);
  const maxSectionNumber = 3;
  const [sectionParagraph, setSectionParagraph] = useState("");

  const sectionData = [
    {
      id: 1,
      story: "Halo kak Alam, kenalin lagi aku Malik IF'20👋 Sebelumnya, mau ngasih disclaimer lagi kak wkwk maaf mungkin ini bakal rada cringe gituu wkwk tapi saya bingung mau purpose kakak asuh tuh kayak gimana, tapi saya juga mau purpose-nya ber-effort gitu kak hehe",
    },
    {
      id: 2,
      story: "Kebetulan minat saya mirip sama minat kakak, yaitu webdev dan kebetulan juga saya lagi mendalami di front-end nya. Dan kebetulan banget adaa program kakak asuh dari Sparta nih kak. Saya ngerasa kak Alam cocok gitu jadi kakak asuh saya, karena kak Alam tuh asik banget orangnya, ramah dan friendly, berkenan buat \"digangguin\" buat saya tanya-tanyain dan diskusi wkwkwk",
    },
    {
      id: 3,
      story: "Kalo saya sendiri, pengen gitu punya kakak asuh yang asik dan ga kaku kek kak Alam wkwkwk dan mungkin bisa project-an bareng nantinya :D Semoga cocok sih kak saya jadi adik asuh kakak wkwkwk",
    },
  ]

  useEffect(() => {
    if (sectionNumber <= maxSectionNumber) {
      const newParagraph = sectionData.find(story => (story.id === sectionNumber));
      setSectionParagraph(newParagraph.story);
    } else {
      setSectionParagraph("");
    }
  }, [sectionNumber]);

  return (
    <div className="story animate-right">
      <div className="story-container">
        <div className="story-section">
          {(sectionNumber <= maxSectionNumber) && 
          <p className="animate-zoom" 
          key={sectionNumber}>
            {sectionParagraph}
          </p>}
          {(sectionNumber === maxSectionNumber+1) && 
          <Link to="/answer" 
          className="story-btn-answer animate-zoom all-btn">
            Click Me!
          </Link> }
        </div>
        <div className="story-button">
          {(sectionNumber > 1) && 
          <button 
          onClick={() => setSectionNumber(sectionNumber-1)} className="btn-prev all-btn">
            &laquo; Prev
          </button>}
          {(sectionNumber <= maxSectionNumber) && 
          <button onClick={() => setSectionNumber(sectionNumber+1)} className="btn-next all-btn">
            Next &raquo;
          </button>}
        </div>
      </div>
    </div>
  );
}
 
export default Story;