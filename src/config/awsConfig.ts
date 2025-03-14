import { S3Client } from "@aws-sdk/client-s3";

import config from "@/config/config";

const s3 = new S3Client([
  {
    region: config.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey,
    },
  },
]);

export default s3;
