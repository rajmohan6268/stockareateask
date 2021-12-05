const initState = [
  {
    name: "Warehouse-165",
    code: "W-00001",
    id: 1,
    city: "Delhi",
    space_available: 1234,
    type: "Leasable Space",
    cluster: "cluster-a-32",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-276",
    code: "W-00002",
    id: 2,
    city: "Chennai",
    space_available: 124,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-3039",
    code: "W-00003",
    id: 3,
    city: "Indore",
    space_available: 134,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-324",
    code: "W-00004",
    id: 4,
    city: "Chennai",
    space_available: 12,
    type: "Leasable Space",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-5454",
    code: "W-00005",
    id: 5,
    city: "Chennai",
    space_available: 1243434,
    type: "Warehouse Service",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-4345",
    code: "W-00006",
    id: 6,
    city: "Chennai",
    space_available: 1,
    type: "Leasable Space",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-3455",
    code: "W-00007",
    id: 7,
    city: "Mumbai",
    space_available: 4,
    type: "Leasable Space",
    cluster: "cluster-a-2",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-23455",
    code: "W-00008",
    id: 8,
    city: "Bangalore",
    space_available: 3456,
    type: "Warehouse Service",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: true,
  },
  {
    name: "Warehouse-6457",
    code: "W-00009",
    id: 9,
    city: "Bangalore",
    space_available: 1234545,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-32456",
    code: "W-000010",
    id: 10,
    city: "Guwahati",
    space_available: 121234,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: true,
  },
  {
    name: "Warehouse-3245678",
    code: "W-000011",
    id: 11,
    city: "Delhi",
    space_available: 98,
    type: "Leasable Space",
    cluster: "cluster-v-2",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-4567",
    code: "W-000012",
    id: 12,
    city: "Indore",
    space_available: 97,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: true,
  },
  {
    name: "Warehouse-458",
    code: "W-000013",
    id: 13,
    city: "Delhi",
    space_available: 654,
    type: "Leasable Space",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
];

const data = (state = initState, action) => {
  
  switch (action.type) {
    case "ADD_WAREHOUSE":
      //  console.log(action, "ADD_WAREHOUSE");
      let data = {
        id: state.length + 1,
        name: action.value.inputField.name,
        code: action.value.inputField.code,

        city: action.value.inputField.city,
        space_available: Number(action.value.inputField.space_available),
        type: action.value.inputField.type,
        cluster: action.value.inputField.cluster,
        is_registered: Boolean(action.value.inputField.is_registered),
        is_live: Boolean(action.value.inputField.is_live),
      };
      let a = [...state, data];
      console.log(typeof state, "state=>a", a, "a");
      return Object([...a]);
    case "UPDATE_WAREHOUSE":
      function replaceindexinarray(array, index, newvalue) {
        return array.map((item, i) => {
          if (i === index) {
            return newvalue;
          } else {
            return item;
          }
        });
      }

      console.log(action, "UPDATE_WAREHOUSE");

      let newState = replaceindexinarray([...state], action.id, action.value);

    

      return Object([...newState]);
    case "DELETE_WAREHOUSE":
      console.log(action, "DELETE_WAREHOUSE");
      //let index1 = state.findIndex((item) => item.id === action.payload.id);
      let newState1 = [...state];
      newState1.splice(Number(action.id), 1);
      return [...newState1];

    default:
      return Object([...state]);
  }
};

export default data;
