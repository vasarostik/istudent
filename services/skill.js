const Skill = require("../database/models").Skill;

exports.findByName = skillName => {
  const skill = Skill.findOne({ where: { name: skillName } });
  return skill;
};

exports.create = skillName => {
  const skill = Skill.create({ name: skillName });
  return skill;
};
