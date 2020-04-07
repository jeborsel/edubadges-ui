export const config = {
    serverUrl: "http://127.0.0.1:8000",
    studentDomain: "edu_id",
    teacherDomain: "surf_conext",
    alaUrl: `https://ala.test.surfconext.nl/?redirect_uri=${encodeURIComponent("http://localhost:4000/validate")}`,
    // alaUrl: `https://ala.demo.eduid.nl/?redirect_uri=${encodeURIComponent("http://localhost:4000/validate")}`
};