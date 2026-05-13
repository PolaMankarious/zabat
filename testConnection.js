const addExamRange = async (userId, start, end) => {
  const { error } = await supabase.from("exam_ranges").insert([
    {
      user_id: userId,
      start_date: start,
      end_date: end,
    },
  ]);

  if (!error) console.log("Exam range added!");
};
