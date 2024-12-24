<script setup>

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
</script>

<template>
  <nav
    class="sticky top-0 w-full z-30 border-b bg-white border-gray-500 h-[68px] flex text-slate-700"
  >
    <div class="navbar bg-white w-full flex justify-between items-center">
      <div class="navbar-start">
        <div class="dropdown">
                    <div
                        tabindex="0"
                        role="button"
                        class="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a @click.prevent="scrollToSection('home')">Home</a>
                        </li>
                        <li>
                            <a @click.prevent="scrollToSection('produk')"
                                >Produk</a
                            >
                        </li>
                        <li>
                            <a @click.prevent="scrollToSection('contact')"
                                >Hubungi Kami</a
                            >
                        </li>
                        <li>
                            <a @click.prevent="scrollToSection('about')"
                                >Tentang Kami</a
                            >
                        </li>
                        <li>
                            <a @click.prevent="scrollToSection('services')"
                                >Layanan Kami</a
                            >
                        </li>
                    </ul>
                </div>
        <img
          src="/public/feliya.png"
          alt="logo"
          class="w-[80px] h-[68px] ml-6 object-contain"
        />
      </div>

      <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <a @click.prevent="scrollToSection('home')">Home</a>
                    </li>
                    <li>
                        <a @click.prevent="scrollToSection('produk')">Produk</a>
                    </li>
                    <li>
                        <a @click.prevent="scrollToSection('contact')"
                            >Hubungi Kami</a
                        >
                    </li>
                    <li>
                        <a @click.prevent="scrollToSection('about')"
                            >Tentang Kami</a
                        >
                    </li>
                    <li>
                        <a @click.prevent="scrollToSection('services')"
                            >Layanan Kami</a
                        >
                    </li>
                </ul>
            </div>

      <div class="navbar-end">
        <!-- Perbaiki path gambar: hilangkan /public/ -->
        <img src="/public/LogoWhatsApp.png" alt="logoWa" class="h-10 mr-6 hover:brightness-90 cursor-pointer" />
      </div>
    </div>
  </nav>
</template>
