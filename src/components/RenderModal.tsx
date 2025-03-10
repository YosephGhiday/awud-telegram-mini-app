import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function RenderModal() {
  const { modals, closeModal } = useModal();
  return (
    <div>
      {modals != undefined && modals?.length > 0 ? (
        <div className="fixed inset-0 bg-black bg-opacity-35 z-[10001] w-full h-full">
          {modals?.map((modal, index) => {
            return (
              <div
                className={`fixed inset-0 z-[calc(50 +${index})]`}
                key={index}
              >
                <div className="h-screen flex items-center justify-center md:px-0 px-5">
                  {modal.isCustom === true ? (
                    <div>{modal.modal}</div>
                  ) : (
                    <div className="p-5 bg-white rounded-xl min-w-[20%] shadow-xl h-auto">
                      <div className="grid grid-cols-1">
                        <div className="flex justify-between mb-2 border-b pb-3">
                          <p className="text-xs font-bold leading-6 text-textPrimary uppercase">
                            {modal.title}
                          </p>
                          {modal.closeable != undefined &&
                          modal.closeable === false ? (
                            <span></span>
                          ) : (
                            <X
                              onClick={closeModal}
                              className="cursor-pointer w-5 h-5 text-textPrimary"
                            />
                          )}
                        </div>
                        {modal.modal}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
      <div></div>
    </div>
  );
}
