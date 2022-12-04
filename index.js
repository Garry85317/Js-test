// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const answerDiv = document.getElementById('answer');
appDiv.innerHTML = `<h1>JS-test</h1>`;
answerDiv.innerHTML = '<p>Anwsers show on console</p>';

const factories = [
  { name: 'BR1', employees: ['John', 'Alice', 'Bob', 'Jessie', 'Karen'] },
  { name: 'BR2', employees: ['Jessie', 'Karen', 'John'] },
  { name: 'BR3', employees: ['Miles', 'Eric', 'Henry', 'Bob'] },
  { name: 'BR4', employees: [] },
];

const test1 = (factories) => {
  return factories.map((factory) => ({
    name: factory.name,
    count: factory.employees.length,
  }));
};

console.log('Q: 1.Count Employees Number by Factory\n A: ');
console.log(test1(factories));

const test2 = (factories) => {
  const map = new Map();

  factories.forEach((factory) => {
    factory.employees.forEach((employee) => {
      if (map.has(employee)) {
        return map.set(employee, map.get(employee) + 1);
      }

      map.set(employee, 1);
    });
  });

  return Array.from(map.entries()).map(([employee, count]) => ({
    employee,
    count,
  }));
};

console.log('Q: 2.Count Factories Number by Employee\n A: ');
console.log(test2(factories));

const test3 = (factories) => {
  return factories.map((factory) => ({
    name: factory.name,
    employees: factory.employees.sort(),
  }));
};

console.log('Q: 3.Order employees list by alphabetical order\n A: ');
console.log(test3(factories));

const employeeType = [
  { id: 1, name: 'FullTime', work_begin: '09:00:00', work_end: '17:00:00' },
  { id: 2, name: 'MidTime', work_begin: '12:00:00', work_end: '21:00:00' },
  { id: 3, name: 'HalfTime', work_begin: '20:00:00', work_end: '00:00:00' },
];

const employees = [
  { id: 1, name: 'Alice', type: 2 },
  { id: 2, name: 'Bob', type: 3 },
  { id: 3, name: 'John', type: 2 },
  { id: 4, name: 'Karen', type: 1 },
  { id: 5, name: 'Miles', type: 3 },
  { id: 6, name: 'Henry', type: 1 },
];

const tasks = [
  { id: 1, title: 'task01', duration: 60 },
  { id: 2, title: 'task02', duration: 120 },
  { id: 3, title: 'task03', duration: 180 },
  { id: 4, title: 'task04', duration: 360 },
  { id: 5, title: 'task05', duration: 30 },
  { id: 6, title: 'task06', duration: 220 },
  { id: 7, title: 'task07', duration: 640 },
  { id: 8, title: 'task08', duration: 250 },
  { id: 9, title: 'task09', duration: 119 },
  { id: 10, title: 'task10', duration: 560 },
  { id: 11, title: 'task11', duration: 340 },
  { id: 12, title: 'task12', duration: 45 },
  { id: 13, title: 'task13', duration: 86 },
  { id: 14, title: 'task14', duration: 480 },
  { id: 15, title: 'task15', duration: 900 },
];

const find_type_by_id = (employeeType) => (id) =>
  employeeType.find((employee) => id === employee.id);

const parse_hour_from_string = (raw) => {
  const matched = /(\d{2}):(\d{2}):(\d{2})/.exec(raw);

  const hour = Number(matched.at(1));
  if (hour === 0) return 24;
  return hour;
};

const test4 = () => {
  const find_by_id = find_type_by_id(employeeType);
  return employees.reduce((total, employee) => {
    const working_type = find_by_id(employee.type);

    const working_hour =
      parse_hour_from_string(working_type.work_end) -
      parse_hour_from_string(working_type.work_begin);

    return total + working_hour;
  }, 0);
};

console.log('Q: 4.Count total hours worked in 1 day ?\n A: ' + test4());

const test5 = (hour) => {
  const find_by_id = find_type_by_id(employeeType);

  return employees.filter((employee) => {
    const working_type = find_by_id(employee.type);

    const begin = parse_hour_from_string(working_type.work_begin);
    const end = parse_hour_from_string(working_type.work_end);

    return hour >= begin && end >= hour;
  }).length;
};

console.log(
  'Q: 5.Make a function that take as parameters dayTime and return number of employee working\n A: ' +
    test5(20)
);

const test6 = (tasks) => {
  const working_hours =
    tasks.map((task) => task.duration).reduce((sum, min) => sum + min, 0) / 60;

  const working_hours_per_day = test4();

  return Math.ceil(working_hours / working_hours_per_day);
};

console.log(
  'Q: 6.How many days of work needed to done all tasks ?\n A: ' + test6(tasks)
);
