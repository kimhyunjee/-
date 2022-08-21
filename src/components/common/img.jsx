import AWS from 'aws-sdk';

function FileUpload() {
  function OnFileUpload(e) {
    const ACCESS_KEY = 'AKIAQJJCHYWDPRDM2ONC';
    const SECRET_ACCESS_KEY = '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';
    const REGION = "ap-northeast-2";
    const S3_BUCKET = 'cucumber-upload-img';

    // AWS ACCESS KEY를 세팅합니다.
    AWS.config.update({
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY
    });

    // 버킷에 맞는 이름과 리전을 설정합니다.
    const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET},
      region: REGION,
    });

    //파일을 가져와서 s3에다가 업로드 하는 라인
    const file = e.target.files[0];

    // 파일과 파일이름을 넘겨주면 됩니다. 
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name
    };
    
    //onObject를 통해 params를 주면 alert로 SUCCESS가 뜨게 됩니다.
    myBucket.putObject(params)
      .on('httpUploadProgress', (evt) => {
        alert("SUCCESS")
      })
      .send((err) => {
        if (err) console.log(err)
      })
  };
  
  return(
    <div>
      <input type = {"file"} onChange={OnFileUpload} />
    </div>
  )
};
export default FileUpload;

