const sponsorLevels = [
  'SILVER',
  'GOLDEN',
  'DIAMOND'
];

const globalPermissions = {
  0: 'ADMIN',
  1: 'ORGANIZER',
  2: 'SPEAKER',
  3: 'ASSISTANT'
};

const typeOfRoom = ['LABORATORY', 'CLASSROOM', 'STAGE']; // TODO: PUT MORE

const contributionStatus = [
  'TO REVIEW',
  'IN REVISION',
  'REJECTED',
  'ACCEPTED'
];

module.exports = {
  sponsorLevels,
  globalPermissions,
  typeOfRoom,
  contributionStatus
};
