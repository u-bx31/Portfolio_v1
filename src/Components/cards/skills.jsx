const SkillsCard = ({ percent, img_skill, header }) => {
  const circleLength = 2 * Math.PI * 48 ;
  return (
    <div className="c_skills_cards_ca">
      <div className="c_skills_cards_ca_progress">
        <svg className="c_skills_cards_ca_progress_circle" viewBox="0 0 100 100" role="presentation">
          <circle className="c_skills_cards_ca_progress_circle_trail" r="48" cx="50" cy="50" stroke="#FFFF" strokeLinecap="round" strokeWidth="2px" >
          </circle>
          <circle strokeDashoffset={circleLength - (percent/100) * circleLength} className="c_skills_cards_ca_progress_circle_path" r="48" cx="50" cy="50" strokeLinecap="round" strokeWidth="4" opacity="1" >
          </circle>
        </svg>
        

        <img src={img_skill} className="c_skills_cards_ca_progress_logo " loading='lazy' alt="" />
      </div>
      <p className="c_skills_cards_ca_text"> {header} {percent || 0}%</p>
    </div>
  );
}

export default SkillsCard;