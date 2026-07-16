import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms & Conditions</DialogTitle>
          <DialogDescription>
            Last updated: March 2026
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-gray-700">
            <section>
              <h3 className="font-bold text-base mb-2">1. Event Attendance</h3>
              <p>
                By registering for the NRI Property Expo, you agree to attend the event at the designated venue and time. Entry is free but registration is mandatory.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">2. Use of Information</h3>
              <p>
                Information provided during registration will be used to facilitate your participation in the event and may be shared with participating developers and exhibitors.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">3. Investment Decisions</h3>
              <p>
                All investment decisions made based on information received at the event are solely your responsibility. We recommend consulting with financial and legal advisors before making any property investments.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">4. Event Changes</h3>
              <p>
                We reserve the right to modify event details, including venue, timing, and participating developers, without prior notice. Registered attendees will be informed of any significant changes.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">5. Photography and Recording</h3>
              <p>
                By attending the event, you consent to being photographed or recorded. These materials may be used for promotional purposes.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">6. Liability</h3>
              <p>
                NRI Nivesh and its organizers are not liable for any losses or damages arising from investment decisions made based on information provided at the event.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">7. Contact</h3>
              <p>
                For questions regarding these terms, please contact us at info@nrinivesh.in or call +91 93727 72668.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}