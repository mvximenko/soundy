<template>
  <div class="fixed z-10 inset-0 overflow-y-auto hidden" id="modal">
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block
        sm:p-0
      "
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8
          sm:align-middle
          sm:max-w-lg
          sm:w-full
        "
      >
        <div class="py-4 text-left px-6">
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <div class="modal-close cursor-pointer z-50">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="
                  block
                  rounded
                  py-3
                  px-4
                  transition
                  hover:text-white
                  text-white
                  bg-blue-600
                "
                href="#"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition hover:text-blue-600"
                href="#"
                >Register</a
              >
            </li>
          </ul>

          <form>
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <input
                type="email"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Enter Email"
              />
            </div>

            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <input
                type="password"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              class="
                block
                w-full
                bg-purple-600
                text-white
                py-1.5
                px-3
                rounded
                transition
                hover:bg-purple-700
              "
            >
              Submit
            </button>
          </form>
          <form>
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <input
                type="text"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Enter Name"
              />
            </div>
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <input
                type="email"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Enter Email"
              />
            </div>
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <input
                type="number"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
              />
            </div>
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <input
                type="password"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Password"
              />
            </div>

            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <input
                type="password"
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Confirm Password"
              />
            </div>

            <div class="mb-3">
              <label class="inline-block mb-2">Country</label>
              <select
                class="
                  block
                  w-full
                  py-1.5
                  px-3
                  text-gray-800
                  border border-gray-300
                  transition
                  duration-500
                  focus:outline-none
                  focus:border-black
                  rounded
                "
              >
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
              </select>
            </div>

            <div class="mb-3 pl-6">
              <input
                type="checkbox"
                class="w-4 h-4 float-left -ml-6 mt-1 rounded"
              />
              <label class="inline-block">Accept terms of service</label>
            </div>
            <button
              type="submit"
              class="
                block
                w-full
                bg-purple-600
                text-white
                py-1.5
                px-3
                rounded
                transition
                hover:bg-purple-700
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
