const Accordian = () => {
  return (
    <div className="bg-[#11052c]">
      <div className="max-w-screen-xl mx-auto pt-24 px-8">
        <div className="collapse collapse-plus text-white bg-[#432c5de8]">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium text-[#f43b86]">
            What is the Top of Team award in the Monthly Winner category?
          </div>
          <div className="collapse-content">
            <p>
              The Top of Team award is the highest honor in our gaming events,
              specifically in the Monthly Winner category. It represents the
              pinnacle of achievement, recognizing the best-performing team that
              demonstrates exceptional skill, strategic prowess, and remarkable
              teamwork during the month.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus text-white bg-[#432c5de8]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-[#f43b86]">
            How is the FPS Warfare Challenge unique from other gaming
            tournaments?
          </div>
          <div className="collapse-content">
            <p>
              The FPS Warfare Challenge stands out due to its intense
              first-person shooter gameplay. It immerses participants in a world
              of tactical battles, encouraging alliances, precise strategies,
              and competitive spirit. It's not just a tournament; it's a fierce
              battleground where only the sharpest shooters survive, making it a
              unique and adrenaline-fueled gaming experience.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus text-white bg-[#432c5de8]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-[#f43b86]">
            What makes the Mystery Enigma Challenge intriguing for participants?
          </div>
          <div className="collapse-content">
            <p>
              The Mystery Enigma Challenge is an enigmatic adventure where
              participants solve mysteries, uncover secrets, and overcome
              obstacles. It's designed to stimulate the inner detective in
              gamers, providing an intriguing and captivating experience. The
              unknown nature of the challenge, coupled with mind-bending riddles
              and unexpected twists, keeps participants engaged and excited
              throughout the event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
