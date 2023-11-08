import { Modal } from "bootstrap-italia";
import React, { useRef } from "react";

import { Icon } from "../Icon";

export function ModaleConForm() {
  const modalRef = useRef<Modal>();

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => modalRef.current?.toggle()}>
        OPEN
      </button>

      <div
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        id="exampleModal"
        aria-labelledby="modal1Title"
        aria-describedby="modal1Description"
        ref={(el) => (modalRef.current = el ? new Modal(el) : undefined)}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title h4" id="modal1Title">
                Intestazione modale
              </h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Chiudi modale">
                <Icon icon="it-close-big" />
              </button>
            </div>
            <div className="modal-body">
              <div id="modal1Description">Descrizione scopo della modale.</div>
              <div className="group-inline pt-3">
                <div className="form-group field-16">
                  <label htmlFor="1">Lorem ipsum 1</label>
                  <input id="1" type="text" className="form-control" />
                </div>
                <div className="form-group field-10">
                  <label htmlFor="2">Lorem ipsum 2</label>
                  <input id="2" type="text" className="form-control" />
                </div>
                <div className="form-group field-30">
                  <label htmlFor="3">Lorem ipsum 3</label>
                  <input id="3" type="text" className="form-control" />
                </div>
                <div className="form-group field-4">
                  <label htmlFor="4">Lorem ipsum 4</label>
                  <input id="4" type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="btn-group-left">
                <button className="btn btn-outline-primary" type="button" data-bs-dismiss="modal">
                  Chiudi
                </button>
              </div>
              <div className="btn-group-right">
                <button className="btn btn-primary" type="button">
                  Salva
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
