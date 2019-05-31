const Vacancy = require("../database/models").Vacancy;
const Position = require("../database/models").Position;
const Company = require("../database/models").Company;
const Skill = require("../database/models").Skill;

const companyService = require("./company");
const positionService = require("./position");
const skillService = require("../services/skill");

exports.create = (companyId, data) => {
  return companyService.findById(companyId).then(company => {
    return positionService.findOrCreate(data.position).then(position => {
      data.positionID = position.id;
      return company.createVacancy(data).then(newVacancy => {
        if (data.skills) {
          data.skills.forEach(skill => {
            return skillService.joinVacancy(newVacancy, skill);
          });
        }
      });
    });
  });
};

exports.getAllVacancies = () => {
  return Vacancy.findAll({
    include: [Position, Company]
  });
};

exports.findByData = data => {
  let filterList = [
    {
      model: Position,
      where: {
        name: data.position
      }
    },
    {
      model: Company,
      where: {
        name: data.company
      }
    },
    {
      model: Skill,
      where: {
        name: data.skill
      }
    }
  ];

  filterList = filterList.filter(
    item => !!item.where.name && !!item.where.name.length
  );

  return Vacancy.findAll({
    include: filterList
  });
};

exports.delete = vacancyId => {
  Vacancy.destroy({ where: { id : vacancyId } });
};

exports.update = (vacancyId,data) => {
  return Vacancy.update(data, { where: { id : vacancyId } });
};
