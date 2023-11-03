import { SunIcon } from "@heroicons/react/20/solid";
import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";

function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">Clinton&apos;s AI</h1>

      <div className="flex flex-row space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain something to me</p>
            <p className="infoText">
              &quot;What is the difference between a dog and a cat?&quot;
            </p>
            <p className="infoText">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Change the Clinton&apos;s AI Model to use
            </p>
            <p className="infoText">
              Messages are stored in Firebase&apos;s firestore
            </p>
            <p className="infoText">
              Hot Toast notifications when Clinton&apos;s AI is thinking!
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May occassionally generate incorrect information
            </p>
            <p className="infoText">
              May occassionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
