const { groupModel } = require('../db/models/groupModel');

class GroupService {
  constructor(groupModel) {
    this.groupModel = groupModel;
  }
}
