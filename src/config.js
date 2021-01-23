const config = {
    s3: {
        REGION: "eu-west-3",
        BUCKET: "notes-app-upload-endpoint",
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://qs4637snyl.execute-api.eu-west-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_Sx6IKZFuU",
        APP_CLIENT_ID: "46b9qs7n9b3ikjpnrb6bpkgs8t",
        IDENTITY_POOL_ID: "eu-west-1:c459ec92-fdb3-460b-b1f5-737a4f5128b7",
    },
};

export default config;