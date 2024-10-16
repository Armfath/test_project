export const checkEmailExists = async (email: string) => {
  const response = await fetch(`contacts/${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.status === 200;
};
