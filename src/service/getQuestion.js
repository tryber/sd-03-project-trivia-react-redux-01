const tokenQuest = async (token) => {
  const URL = `https://opentdb.com/api.php?amount=5&token=${token}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) { return error };
}

export default tokenQuest;
