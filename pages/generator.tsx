import { create } from "ipfs-http-client";
import { Buffer } from 'buffer';
import { useState } from "react";
import { FileUploader } from 'react-drag-drop-files';

const projectId = "2DwOxVW5Mpwuwg67AAvpK7WVtgu";
const projectSecret = "dd72d3121e4a85426a11a85fe04cfa28";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`;
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

const fileTypes = ["JPG", "PNG"];

function App() {
    const [image, setImage] = useState<any>();

    const handleChange = (image: any) => {
        setImage(image);
    };

    const upload = async () => {
        const subdomain = 'https://kenzo.infura-ipfs.io';
        if(image){
            try {
                const imageAdded = await client.add({ content: image });
                const imageURL = `${subdomain}/ipfs/${imageAdded.path}`;
                console.log(imageURL)
      
            } catch (error) {
              console.log(error.message);
            }
        }else{
            try {
                const nftMetadata = 
                  {
                      "id": 1,
                      "name": `Kenzo Penthouse`,
                      "description": "Luxurious penthouse located in the heart of Poznań",
                      "image": `https://kenzo.infura-ipfs.io/ipfs/QmSwQxudrfKcrx4S2hxgRmMQJoMncY4J8XRdoATXyXtFfo`,
                      "attributes": [
                          {
                              "address": "Poznań, Poland",
                              "rooms": "3",
                              "interior space": "2616 sq. ft."
                          }
                      ]
                  }
                const meatdataAdded = await client.add({ content: JSON.stringify(nftMetadata)});
                const metadataURL = `${subdomain}/ipfs/${meatdataAdded.path}`;
                console.log(metadataURL)
      
            } catch (error) {
              console.log('Error uploading file to IPFS.');
            }
        }

    }

  return (
    <div className="App">
                  <label htmlFor="spots" className="block text-sm font-medium text-gray-700">
                        Image <span className="text-gray-400 font-light">optional</span>
                  </label>
                  <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={false} label="Drop an image" >
                    {image ? 
                    <div className=" w-full border-4 border-gray-200 border-dashed rounded-xl mt-2 pt-4 pb-6 cursor-pointer">
                      <div className="w-full text-center text-gray-500">{image.name} <br />Uploaded sccessfully ✅</div>
                    </div>   
                    :
                    <div className=" w-full border-4 border-gray-200 border-dashed rounded-xl mt-2 pt-4 pb-6 cursor-pointer">
                      <div className="w-full flex justify-center">
                      </div>
                      <div className="w-full text-center text-gray-500">Drop an image</div>
                    </div>             
                    }
                  </FileUploader>
        <button onClick={() => upload()}>Upload</button>
    </div>
  );
}

export default App;