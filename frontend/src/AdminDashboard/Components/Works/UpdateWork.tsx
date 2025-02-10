import React from "react";
import ReactImageUploading, { ImageListType } from "react-images-uploading";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ButtonLoader } from "../../../Utils/ButtonLoader";
import JoditEditor from "jodit-react";

export const UpdateWork = () => {
  const editor = React.useRef(null);
  const navigate = useNavigate();
  const [isButton, setIsButton] = React.useState(false);
  const [images, setImages] = React.useState<ImageListType>([]);
  const [featureImage, setFeatureImage] = React.useState<ImageListType>([]);

  const [inputs, setInputs] = React.useState<{
    title_En: string;
    title_Np: string;
    description_En: string;
    description_Np: string;
    // date: string;
  }>({
    title_En: "",
    title_Np: "",
    description_En: "",
    description_Np: "",
    // date: "",
  });

  const onImageGallaryChange = async (imageList: ImageListType) => {
    setImages(imageList);
  };

  const onFeatureImage = async (imageList: ImageListType) => {
    setFeatureImage(imageList);
  };

  const config = React.useMemo(
    () => ({
      height: 400,
      toolbarSticky: false,
    }),
    []
  );
  const add = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsButton(true);
    const formData = new FormData();
    formData.append("title_En", inputs.title_En);
    formData.append("title_Np", inputs.title_Np);
    formData.append("description_En", inputs.description_En);
    formData.append("description_Np", inputs.description_Np);

    try {
      const res = await fetch("", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
        setInputs({
          title_En: "",
          title_Np: "",
          description_En: "",
          description_Np: "",
        });

        setTimeout(() => {
          navigate(-1);
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error);
    } finally {
      setIsButton(false);
    }
  };
  return (
    <>
      <div className="sm:ml-60 mt-20 sm:px-30 p-3">
        <div className="flex justify-center mx-auto md:w-3/4 w-full">
          <form
            onSubmit={add}
            className="flex w-full justify-center gap-20 flex-col mx-auto shadow-lg rounded-lg border p-10"
          >
            <div className="flex flex-col gap-10 ">
              <h1 className="font-bold text-xl pb-10 text-center lg:text-2xl">
                Update Work
              </h1>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="title_En"
                  value={inputs.title_En}
                  lang="ne"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Title_En{" "}
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="title_Np"
                  value={inputs.title_Np}
                  lang="ne"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Title_Np{" "}
                </label>
              </div>

              <div className="flex flex-col gap-5 w-full pb-5 ">
                <label className="font-medium">Description_En</label>
                <JoditEditor
                  ref={editor}
                  value={inputs.description_En}
                  config={config}
                  onChange={(content) => {
                    setInputs({ ...inputs, description_En: content });
                  }}
                />
              </div>
              <div className="flex flex-col gap-5 w-full pb-5 ">
                <label className="font-medium">Description_Np</label>
                <JoditEditor
                  ref={editor}
                  value={inputs.description_Np}
                  config={config}
                  onChange={(content) => {
                    setInputs({ ...inputs, description_Np: content });
                  }}
                />
              </div>
            </div>

            <div className="flex gap-20">
              <ReactImageUploading
                value={featureImage}
                onChange={onFeatureImage}
                maxNumber={1000}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  // onImageRemove,
                  isDragging,
                  dragProps,
                }: {
                  imageList: ImageListType;
                  onImageUpload: () => void;
                  onImageRemoveAll: () => void;
                  onImageRemove: (index: number) => void;
                  isDragging: boolean;
                  dragProps: React.HTMLAttributes<HTMLDivElement>;
                }) => (
                  <div {...dragProps} className="upload__image-wrapper">
                    <button
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        onImageUpload();
                      }}
                      className="p-2 border border-gray-600 rounded-lg mb-2 items-center"
                    >
                      Add Feature Image
                    </button>
                    &nbsp;
                    {featureImage.length > 0 ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          onImageRemoveAll();
                        }}
                        className="p-2 rounded-lg border"
                      >
                        Remove
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="flex flex-row flex-wrap gap-7 mt-5">
                      {imageList.map((image, index) => (
                        <div
                          key={index}
                          className="image-item flex flex-row w-fit"
                        >
                          <div>
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper flex gap-x-3">
                              {/* <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    onImageRemove(index);
                                  }}
                                  className="bg-red-600 mt-1 text-xs p-1 rounded-md"
                                >
                                  Remove
                                </button> */}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ReactImageUploading>

              <ReactImageUploading
                value={images}
                multiple
                onChange={onImageGallaryChange}
                maxNumber={1000}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }: {
                  imageList: ImageListType;
                  onImageUpload: () => void;
                  onImageRemoveAll: () => void;
                  onImageRemove: (index: number) => void;
                  isDragging: boolean;
                  dragProps: React.HTMLAttributes<HTMLDivElement>;
                }) => (
                  <div {...dragProps} className="upload__image-wrapper">
                    <button
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        onImageUpload();
                      }}
                      className="p-2 border border-gray-600 rounded-lg mb-2 items-center"
                    >
                      Add Images
                    </button>
                    &nbsp;
                    {images.length > 0 ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          onImageRemoveAll();
                        }}
                        className="p-2 rounded-lg border"
                      >
                        Remove
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="flex flex-row flex-wrap gap-7 mt-5">
                      {imageList.map((image, index) => (
                        <div
                          key={index}
                          className="image-item flex flex-row w-fit"
                        >
                          <div>
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper flex gap-x-3">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  onImageRemove(index);
                                }}
                                className="bg-red-600 mt-1 text-xs p-1 rounded-md"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ReactImageUploading>
            </div>

            <div>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit {isButton ? <ButtonLoader /> : ""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
