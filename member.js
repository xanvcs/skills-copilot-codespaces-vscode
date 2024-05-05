function skillsMember() {
  return {
    skills: ['skill1', 'skill2', 'skill3'],
    getSkills: function() {
      return this.skills;
    },
    addSkill: function(skill) {
      this.skills.push(skill);
    }
  };
}