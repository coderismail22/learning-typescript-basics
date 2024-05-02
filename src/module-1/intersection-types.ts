{
  //Intersection Types [It's like intersection set]
  type FrontEndDeveloper = {
    skills: string[];
    designation1: "Junior Frontend Developer";
  };

  type BackEndDeveloper = {
    skills: string[];
    experience: "5Y" | "10Y";
    designation2: "Junior Backend Developer";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

  const newDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "JS", "NodeJS", "PostGreSQL"],
    experience: "10Y",
    designation1: "Junior Frontend Developer",
    designation2: "Junior Backend Developer",
  };
}
