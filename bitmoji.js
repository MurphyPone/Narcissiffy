console.log("bitmojis here");

let filenames = [
  "00f49d2b-76c1-4740-82ad-1226f8e8790b-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "054dd530-0437-42e2-b542-ea3336633e5f-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "06564be0-93e6-44c6-8479-62051bb40ae4-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "06bcbf65-3000-490f-8911-7e3f9dc2e118-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "07b628a8-24e3-48e8-8d44-cc1ab7db576f-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "0a555299-2c53-424a-bb2a-dd3b68a4e3fe-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "0c2c7571-2274-4dbf-8d8f-03cc8a851525-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "0d1078b7-93e1-4a4e-93c0-03915e4164c0-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "1055db6f-9355-409b-8d16-d4ed05a9cbba-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "10f1a93e-df4b-480a-93df-49846f642be0-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "123f2a14-04d8-446e-a624-f7ed7446704c-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "139d9210-3e24-4ae1-b46c-340632f02735-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "1628d8f1-76a0-4c81-9566-4267b12a547f-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "166db206-f17b-4ae0-ae86-bf25b2f5e838-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "1ad77a08-1eea-4cc7-ab1a-e37e07e70265-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "1d94da02-6431-445d-83b1-193712b6f689-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "1e48d1b7-ecc3-4222-a243-6ae7817151ac-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "1e50fa47-306c-4b73-acd0-7c3df0a351e1-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "1fa0031b-e1a8-4c99-87b9-9780d31745b9-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "1fed9bba-be76-4cee-a0cf-82cdefd04cce-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "21adbd04-6711-488a-ba06-b6ff2dcd5b16-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "2e834dbc-b954-4ba5-9e4a-5b5c62aa4f87-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "2ea4bdd1-0ac0-44ff-8f51-4ab0b751bbc1-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "2ebf281b-e198-4288-bbc5-bd3363fd3f41-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "3027a0ca-ce31-4263-a0e8-1b1ae0471410-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "321b63e4-84b6-42f0-8c03-84756ed6cf19-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "365addfd-bab6-49e7-8bb6-358100afa25e-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "3c78aab7-b44e-4826-96f3-c4ab51c2cfe2-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "3ea5fb70-e76c-4c70-99c8-c7ba6f2d9b5b-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "4580083e-e28c-4001-b89d-20fa54cf8c93-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "4773aa63-7a56-4120-9c33-019fd70dd876-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "4a465040-246e-45cd-881c-6c9004ce7432-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "4c1b8b5f-9db0-47ad-9d3a-2c20d510c2f0-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "4cca87d1-95c0-4e8a-a110-92baa8293c26-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "4f753daf-7ecf-47c7-9730-8543112a3864-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "508a2bf3-044a-4001-b3f1-f5ee4ffeeadb-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "526a87a4-a412-4bbc-b678-6f86cf882123-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "52e898e4-fe3c-46c4-a195-34cd7a1786dd-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "55be20f7-d19a-4086-9f24-a90becbc9b2c-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "56949f31-960c-4bc3-93f8-69bad0a4ab43-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "5a224a10-952e-4826-a4ee-919b23de2b52-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "6a9c4bf8-45e7-4baa-bc36-8da331a7b0a6-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "6c39c0ef-110e-4936-8b98-456238566d66-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "6e7eab4c-4d05-434a-978c-6b9ae0120f51-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "73ac1d5d-af34-452c-8f77-4c23507e24a2-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "757ac79c-3669-42d3-b687-13e66b9ff56f-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "7dbd26ec-b181-4bfc-a964-575f4b24d93f-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "8265d69f-2e1e-4560-96e3-9e5e6639a121-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "82ad91ad-5780-41b2-ad0c-74706b47f33a-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "830e9109-0b1b-4546-a17a-eb3973b466e7-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "8606b1e0-5a45-4c91-845e-3174a7cbbcfd-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "877e188a-c090-442c-b760-b34b3cb9c454-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "88e9bc51-35da-49e1-a9b6-e76f28575f3f-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "8ed7d953-123d-4286-9404-84414e2056ad-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "91cda591-5c62-4352-80f7-197a30e77707-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "91de9373-f9ea-421e-8425-309ac8d5f59b-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "94f2aaf9-22c9-49ad-b876-73715887f6b8-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "95e12154-c17a-468e-b71f-9956d1d0c298-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "9773ae13-8908-454d-bc16-3a4d9a502fc9-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "9f57e5be-3002-4558-99c4-9cef298a927e-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "a23324fa-9323-4cbf-836c-1c77bb174cab-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "a3266469-0e26-4d46-953a-2c76c54f5e6d-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "a3782278-be23-4d85-9c0d-f1bc09e751f5-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "a3dd85e0-7ad1-4ac7-b3e3-281580e03b8e-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "a4633b12-0ec4-4364-a33e-bec5e629b080-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "a6333955-5854-4f7d-9675-f17bf07fce90-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "a7e6ab20-9788-4b6d-b83a-8b696de1390b-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "aea6bdba-1a37-4813-9b43-52b9561a94d5-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "b03678fd-c146-4a8c-8441-fce9129119a3-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "b058fd56-cf15-4efa-ad97-61fff2717cf8-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "b0af5abf-e244-42cf-9140-425421191fa4-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "b3bd68b5-f679-4f1c-b4a7-d225661c0a5c-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "b49695c7-0048-4bc7-aeea-dd256d96a82c-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "b71ef124-9e57-4515-946d-49a116a73596-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "bd484fac-1965-4b3c-94bc-17181ad76618-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "c2ef31b4-ebbb-4ded-b341-1d15b41982ca-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "ccd921ab-c3e6-479a-81fd-0dd21e2bb8d0-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "d38720bd-60aa-4e4d-91ee-cef1b0d5ac72-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "d38cf0e9-2daa-4655-be2d-7dbb8b3fea92-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "d3bdf0a8-02c0-46ce-bca8-cc40bc321bc6-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "d41f6c26-7580-4210-a813-dec5a031ecbd-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "d436e0aa-e48e-4294-81a9-af3a39b8a276-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "db234150-f904-4542-8c54-407735825fac-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "e0617d42-95ec-4b0b-89d5-addf67cfc2f0-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "e09b6e67-e890-4746-9111-0f4c2de77dec-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "e0fdbbb4-0188-49f9-9a25-3102a827ad12-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "e9c209fe-d2f3-4ca1-b023-47de9c09dbad-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "eac5bca0-71e9-4690-b0db-33fb32b49959-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "eaf272e5-83a1-4280-b4a3-f2657c14e647-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "eb8fe515-6324-4cab-826d-96a4b87ef47b-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "ebc4a0c6-dcda-4abb-9758-d6228a00fa30-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "f5fed534-1f42-440c-8b23-1ebe8bfda9de-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "f743b69a-9fa6-40f1-bdcd-d52bcf11ddee-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "f83b64d4-beb3-40f2-be35-c20908b8f9c5-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png",
  "fb19ba75-16d2-4e5c-926c-c4ca520ce00f-6bb1db9b-99de-492a-aa62-e6c439334de5-v1.png"
]
//Gets all images on webpage
let imgs = document.getElementsByTagName('img');

for (imgElement of imgs) {
  let i = Math.floor(Math.random() * filenames.length);
  let file = "images/" + filenames[i];
  let url = chrome.extension.getURL(file);
  imgElement.src = url;
  console.log(url);
}
