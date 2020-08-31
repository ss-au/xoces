// console.log('xoces is loaded:', xoces);

// ========
// data that we want to visualize
// =========
var APAC_Acred = [
  {id: '1', type: 'APAC_Acred', name: 'Become captain of a starship'},
  {id: '2', type: 'APAC_Acred', name: 'Do 50 pullups with a 20lb backpack'},
  {id: '3', type: 'APAC_Acred', name: 'Demonstrate leadership potential in crises situations'},
  {id: '4', type: 'APAC_Acred', name: 'Design engineering systems'},
  {id: '5', type: 'APAC_Acred', name: 'Collaborate with others in a team'},
  {id: '6', type: 'APAC_Acred', name: 'Derive the physics governing electromagnetic systems'},
  {id: '7', type: 'APAC_Acred', name: 'Apply Faraday\'s law'},

];

var Assessment = [
  {id: 'm1', type: 'assessment', name: 'Aeronautics'},
  {id: 'm10', type: 'assessment', name: 'Computer Science'},
  {id: 'm11', type: 'assessment', name: 'Astronomy'},
  {id: 'm12', type: 'assessment', name: 'Exobiology'},

  {id: 'm2', type: 'assessment', name: 'Leadership'},
  {id: 'm3', type: 'assessment', name: 'Fitness'}
];

var Course = [
  {id: 't1', type: 'course', name: 'Command'},
  {id: 't2', type: 'course', name: 'Science'},
  {id: 't3', type: 'course', name: 'Engineering'},
];

var Program = [
  {id: 'Starfleet-Academy', type: 'program', name: 'Starfleet Academy'}
];

var relationships = [
  {id: 'r1', type: 'has_prerequisite_of', sourceId: '1', targetId: '2'},
  {id: 'r2', type: 'has_prerequisite_of', sourceId: '1', targetId: '3'},
  {id: 'r3', type: 'has_prerequisite_of', sourceId: '1', targetId: '4'},
  {id: 'r4', type: 'has_prerequisite_of', sourceId: '3', targetId: '5'},
  {id: 'r5', type: 'has_prerequisite_of', sourceId: '4', targetId: '6'},
  {id: 'r6', type: 'has_prerequisite_of', sourceId: '6', targetId: '7'},

  {id: 'r1001', type: 'belongs_to', sourceId: '1', targetId: 'm2'},
  {id: 'r1002', type: 'belongs_to', sourceId: '2', targetId: 'm3'},
  {id: 'r1003', type: 'belongs_to', sourceId: '3', targetId: 'm2'},
  {id: 'r1004', type: 'belongs_to', sourceId: '4', targetId: 'm1'},
  {id: 'r1005', type: 'belongs_to', sourceId: '5', targetId: 'm2'},
  {id: 'r1006', type: 'belongs_to', sourceId: '6', targetId: 'm1'},
  {id: 'r1007', type: 'belongs_to', sourceId: '7', targetId: 'm1'},

  {id: 'r1008', type: 'belongs_to', sourceId: 't1', targetId: 'Starfleet-Academy'},
  {id: 'r1009', type: 'belongs_to', sourceId: 't2', targetId: 'Starfleet-Academy'},
  {id: 'r1010', type: 'belongs_to', sourceId: 't3', targetId: 'Starfleet-Academy'},
  {id: 'r1011', type: 'belongs_to', sourceId: 'm10', targetId: 't2'},
  {id: 'r1012', type: 'belongs_to', sourceId: 'm11', targetId: 't2'},
  {id: 'r1013', type: 'belongs_to', sourceId: 'm12', targetId: 't2'},
  {id: 'r1014', type: 'belongs_to', sourceId: 'm2', targetId: 't1'},
  {id: 'r1015', type: 'belongs_to', sourceId: 'm3', targetId: 't1'},

  {id: 'r1020', type: 'belongs_to', sourceId: 'm1', targetId: 't3'},
]

// =====
// instantiate a new Xoces widget
// ========
var cw = xoces.widgets.XocesWidget.new({
  hierarchy: ['institution', 'track', 'module', 'outcome'],
  data: {
    entities: institutions.concat(tracks, modules, outcomes),
    relationships: relationships
  },
  currentLevelEntity: 'm1',
  view: 'TREE_VIEW',
  entityLabelKey: 'name',
  nodeLabelKey: 'name',
  relationship: {
    parentType: 'belongs_to',
    sourceRef: 'sourceId',
    targetRef: 'targetId',
  },
  width: '100%',
  height: 500,
  colorScheme: 'dark',
  onMouseOverFinish: function(data) {
    // console.log('onMouseOverFinish: i was mouseovered!', data)
  },
  onMouseOutFinish: function(data) {
    // console.log('onMouseOutFinish: i was mouseovered!', data)
  },
  onClickFinish: function(data) {
    // console.log('onClickFinish: i was clicked!', data)
  }
});

// render it into the specified container
cw.render({
  container: 'xocesContainer'
});
