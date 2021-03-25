class ClsUserQuerys {
  public MutationCreateUser = ({ strEmail, strFullName, strPassword }) => {
    return `
    mutation{
      createUser(DataUser:{
        struser:"${strEmail}",
        strfullname:"${strFullName}",
        strpassword:"${strPassword}"
      })
    }
    `;
  };

  public QueryValidateLoginUser = ({ strEmail, strPassword }: { strEmail: string; strPassword: string }) => {
    return `query{
      ValidateUserLogin(DataUser:{
        strfullname:""
        struser:"${strEmail}"
        strpassword:"${strPassword}"
      })
    }`;
  };
}

export default ClsUserQuerys;
