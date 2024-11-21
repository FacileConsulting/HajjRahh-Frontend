export const defaultPackages = {
  package1: 'Package 1',
  package2: 'Package 2',
  package3: 'Package 3'
};

export const formatDate = (dateString) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [day, month, year] = dateString.split("-");
  const monthAbbreviation = months[parseInt(month, 10) - 1];
  return `${day}-${monthAbbreviation}-${year}`;
};