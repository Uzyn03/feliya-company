<template>
  <div class="flex flex-col flex-1 bg-white">
    <section
      id="home"
      class="relative flex justify-center items-center min-h-[calc(100vh-68px)] bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('${baseUrl}images/FotoBG.jpg')` }"
    >
      <!-- Text di tengah -->
      <div class="relative z-10 text-center text-white">
        <h1 class="text-2xl md:text-4xl font-bold mx-auto">
          Perusahaan AC dan pendingin <br />
          yang Terpercaya
        </h1>
        <p class="text-sm md:text-lg mt-2 md:w-1/2 mx-auto mb-10">
          Di PT Feliya Laju Teknik , kami dapat memberi Anda berbagai layanan
          untuk kebutuhan AC dan pendingin Anda. Kami berbasis di Jakarta,
          Indonesia dan mencakup Jabodetabek, Bandung, dan daerah sekitarnya.
        </p>
        <a
          @click.prevent="scrollToSection('services')"
          class="bg-orange-500 py-2 px-4 rounded-lg text-white cursor-pointer hover:bg-orange-600"
          >Lihat Layanan Kami</a
        >
      </div>
    </section>

    <!-- 3 Quality -->
    <!-- Quality, Free Consultation, Fully Qualified -->
    <section class="">
      <!--  Container  -->
      <div class="mx-auto">
        <!--  Container Item  -->
        <div
          class="flex gap-4 justify-evenly md:flex-row flex-col items-center md:h-full p-4 bg-blue-950 text-white"
        >
          <!-- Item 1  -->
          <div class="flex items-center gap-4">
            <svg
              class="w-6 h-6"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#ffffff"
            >
              <path
                d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M13 14V14C13 11.2386 15.2386 9 18 9V9C20.7614 9 23 11.2386 23 14V14.5"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>

            <p class="text-md">Pengerjaan Berkualitas</p>
          </div>

          <!-- Item 2  -->
          <div class="flex items-center gap-4">
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#ffffff"
            >
              <path
                d="M8.5 4H6C4.89543 4 4 4.89543 4 6V20C4 21.1046 4.89543 22 6 22H12"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M15.5 4H18C19.1046 4 20 4.89543 20 6V15"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M8 6.4V4.5C8 4.22386 8.22386 4 8.5 4C8.77614 4 9.00422 3.77604 9.05152 3.50398C9.19968 2.65171 9.77399 1 12 1C14.226 1 14.8003 2.65171 14.9485 3.50398C14.9958 3.77604 15.2239 4 15.5 4C15.7761 4 16 4.22386 16 4.5V6.4C16 6.73137 15.7314 7 15.4 7H8.6C8.26863 7 8 6.73137 8 6.4Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M15.5 20.5L17.5 22.5L22.5 17.5"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p class="text-md">Konsultasi Gratis</p>
          </div>

          <!-- Item 3  -->
          <div class="flex items-center gap-4">
            <svg
              class="w-6 h-6"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#ffffff"
            >
              <path
                d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
                stroke="#ffffff"
                stroke-width="1.5"
              ></path>
              <path
                d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p class="text-md">Harga Terjangkau</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Section -->
    <section id="services" class="container-lg mx-auto flex flex-col">
      <!-- Title -->
      <SectionTitle>
        <template #english-version> Our Best Service </template>

        <template #indonesian-version> Layanan Terbaik Kami </template>
      </SectionTitle>

      <div class="md:py-8 p-4 flex flex-col md:flex-row gap-12 items-baseline">
        <!-- Item 1 -->
        <div
          class="max-w-sm rounded overflow-hidden shadow-lg"
          v-for="service in services"
          :key="service.id"
        >
          <div>
            <!-- Image -->
            <div
              class="relative w-full h-96 bg-cover bg-center bg-no-repeat"
              :style="{
                backgroundImage: `url(${service.image})`,
              }"
            >
              <!-- Overlay -->

              <!-- Content -->
              <div
                class="relative z-10 px-6 py-4 flex flex-col justify-between h-full text-white"
              >
                <div class="font-bold text-xl mb-2">
                  {{ service.title }}
                </div>
                <p class="text-base">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Produk Section -->
    <section id="product" class="container-lg mx-auto flex flex-col">
      <!-- Title -->
      <SectionTitle>
        <template #english-version> Our Product </template>

        <template #indonesian-version> Produk Kami </template>
      </SectionTitle>

      <div
        class="md:py-8 p-8 flex flex-wrap justify-around flex-col md:flex-row gap-8 items-baseline"
      >
        <div v-for="product in products" :key="product.id">
          <h3 class="font-bold text-xl mb-4 text-center">
            {{ product.title }}
          </h3>
          <div class="relative">
            <img
              :src="product.image"
              class="w-full h-[300px] object-cover rounded-md"
            />
            <!-- <div class="absolute inset-0 bg-black/40"></div> -->
          </div>

          <ul class="list-disc ml-5 mt-2">
            <li
              v-for="(item, index) in product.description"
              :key="index"
              class="text-gray-500"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Why Choose Use Section -->
    <section id="choose">
      <div class="container w-fit mx-auto my-12">
        <!-- Title -->
        <SectionTitle>
          <template #english-version> Why Choose Us </template>

          <template #indonesian-version> Mengapa Memilih Kami </template>
        </SectionTitle>

        <!-- Content -->
        <div class="max-w-4xl mx-auto px-5 my-12">
          <div class="grid md:grid-cols-2 gap-10 my-12">
            <div
              class="flex gap-4 items-start"
              v-for="choose in whyChooseUs"
              :key="choose"
            >
              <span
                class="text-orange-600 bg-orange-500/10 p-3 rounded-full"
                v-html="choose.svg"
              >
              </span>
              <div>
                <h3 class="font-semibold text-xl">
                  {{ choose.title }}
                </h3>
                <p class="mt-1 text-gray-500">
                  {{ choose.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us -->
    <section id="about" class="container-lg mx-auto flex flex-col my-12">
      <SectionTitle>
        <template #english-version> About Us </template>
        <template #indonesian-version> Tentang Kami </template>
      </SectionTitle>

      <!-- Content -->
      <div class="flex md:flex-row flex-col justify-between md:my-12 my-4 p-4">
        <!-- Text -->
        <div class="flex flex-col gap-8">
          <h1 class="md:text-4xl text-3xl max-w-lg font-medium text-slate-800">
            Ahli dalam Solusi AC, Mengutamakan Kenyamanan Anda
          </h1>
          <p class="text-gray-500 max-w-lg text-lg flex-1">
            Feliya Laju Teknik adalah perusahaan layanan dan service AC yang
            berfokus pada kualitas dan kepuasan pelanggan.
          </p>

          <!-- Statistics -->
          <div class="flex justify-between md:my-0 mb-6">
            <!-- Content 1 -->
            <div class="flex gap-2 flex-col">
              <h1 class="md:text-5xl text-4xl text-orange-500 font-semibold">
                200+
              </h1>
              <p class="text-gray-500 md:text-xl text-lg">Bisnis Terbantu</p>
            </div>

            <!-- Vertical Line  -->
            <div class="h-fill w-[2px] bg-gray-200"></div>

            <!-- Content 2 -->
            <div class="flex gap-2 flex-col">
              <h1 class="md:text-5xl text-4xl text-orange-500 font-semibold">
                100+
              </h1>
              <p class="text-gray-500 md:text-xl text-lg">
                Proyek Terselesaikan
              </p>
            </div>
          </div>
        </div>
        <!-- Image -->
        <div class="mx-auto md:mx-0">
          <img
            src="/images/about.png"
            alt="about"
            class="h-48 md:h-96 md:w-auto rounded-md ml-8"
          />
        </div>
      </div>

      <!-- About Us Contact -->
      <section id="contact"
        class="flex md:flex-row flex-col md:p-0 p-4 justify-between my-12 gap-10"
      >
        <!-- Text -->
        <div class="flex flex-col gap-8 ml-4">
          <h1 class="text-4xl max-w-lg font-medium text-slate-800">
            Hubungi Kami
          </h1>
          <p class="text-gray-500 max-w-lg text-lg">
            Kami ingin sekali mendengar dari Anda! Jika Anda memiliki
            pertanyaan, butuh dukungan, atau ingin mempelajari lebih lanjut
            tentang layanan kami, tim kami siap membantu.
          </p>
        </div>
        <!-- Contact -->
        <div id="contact" class="flex items-start">
          <div class="grid md:grid-cols-1 gap-4">
            <div
              class="flex flex-col md:items-center items-start gap-2"
              v-for="contact in contactInfo"
              :key="contact"
            >
              <span
                class="text-orange-600 bg-orange-500/10 p-3 rounded-full"
                v-html="contact.svg"
              >
              </span>
              <div class="flex flex-col md:items-center items-start">
                <h3 class="font-semibold text-xl">
                  {{ contact.title }}
                </h3>
                <p class="mt-1 text-gray-500">
                  {{ contact.description_1 }}
                </p>
                <p class="mt-1 text-gray-500">
                  {{ contact.description_2 }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src="/images/Logo Merk.png" alt="brand" class="m-6" />
    </section>
    <div class="container mx-auto px-8 py-4">
      <h2 class="text-3xl font-medium mb-8 text-center text-slate-800">
        Mitra Kami :
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div
          v-for="(mitra, index) in mitraList"
          :key="index"
          class="p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
        >
          <p class="text-gray-600 font-medium text-xs text-center">
            {{ mitra }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from "@/components/Title/SectionTitle.vue";
import { ref } from "vue";
const baseUrl = import.meta.env.BASE_URL;

// untuk layanan kami
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

import airConditionerImg from "@/assets/images/air-conditioner.png";
import airDryerImg from "@/assets/images/air-dryer.png";
import refrigerasiImg from "@/assets/images/refrigerasi.png";
// Services Sections Item
const services = ref([
  {
    id: 1,
    image: airConditionerImg,
    title: "Air Conditioner",
    description: `Layanan AC dan pendingin yang terpercaya,
        berkualitas dan bergaransi, yang tersedia beberapa
        tipe, mulai dari AC Split, AC Single, AC 1.5 dan AC
        3.0.`,
  },
  {
    id: 2,
    image: airDryerImg,
    title: "Air Dryer",
    description: `Layanan Khusus Air Dryer / Mesin Pengering Udara dari berbagai Brand, Donaldson, CompAir, Hakinson, atlas Copco, Friul, dll.`,
  },
  {
    id: 3,
    image: refrigerasiImg,
    title: "Refrigerasi",
    description: `Layanan Perawatan, Refrigasi, Instalasi, Air Blast Freezer, Air Handling Unit, ColdRoomm Fabrikasi Cold Storage, dll.`,
  },
]);

//Product section item
import instalasiImg from "@/assets/images/instalasi.png";
import cuciImg from "@/assets/images/cuci.png";
import konsulImg from "@/assets/images/konsul.png";
import perawatanImg from "@/assets/images/perawatan.png";
import perbaikanImg from "@/assets/images/perbaikan.png";
const products = ref([
  {
    id: 1,
    image: instalasiImg,
    title: "Instalasi AC Baru",
    description: [
      "Konsultasi kebutuhan pendingin ruangan",
      "Pemilihan unit AC sesuai ukuran dan kebutuhan ruangan",
      "Pemasangan profesional",
      "Uji coba dan kalibrasi sistem",
    ],
  },
  {
    id: 2,
    image: perawatanImg,
    title: "Perawatan Berkala",
    description: [
      "Pembersihan filter",
      "Pengecekan kelembaban dan kinerja mesin",
      "Pembersihan saluran udara",
      "Pelumasan komponen",
      "Pengecekan tekanan freon",
    ],
  },
  {
    id: 3,
    image: perbaikanImg,
    title: "Perbaikan dan Reparasi",
    description: [
      "Diagnosa kerusakan AC",
      "Penggantian komponen rusak",
      "Perbaikan sistem pendingin",
      "Servis darurat",
      "Perbaikan bocoran freon",
    ],
  },
  {
    id: 4,
    image: cuciImg,
    title: "Jasa Cuci AC",
    description: [
      "Cuci indoor/outdoor unit",
      "Sterilisasi dan pembersihan menyeluruh",
      "Penanganan jamur dan bakteri",
    ],
  },
  {
    id: 5,
    image: konsulImg,
    title: "Konsultasi dan Saran Teknis",
    description: [
      "Konsultasi pemilihan AC",
      "Saran efisiensi energi",
      "Rekomendasi perawatan",
      "Evaluasi sistem pendingin",
    ],
  },
]);

// Why Choose Use Section Item
const whyChooseUs = ref([
  {
    title: "Menghargai Waktu",
    description:
      "Banyak layanan serupa yang tidak mengedepankan waktu. Di Feliya Laju Teknik, kami sangat mengutamakan ketepatan waktu dan kepuasan pelanggan.",
    svg: `<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="15"
                                    height="15"
                                    fill="none"
                                    class="w-8 h-8"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                    >
                                        <path d="M12 6v6h6" />
                                        <path
                                            d="M21.888 10.5C21.164 5.689 17.013 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c4.1 0 7.625-2.468 9.168-6"
                                        />
                                        <path
                                            d="M17 16h4.4a.6.6 0 0 1 .6.6V21"
                                        />
                                    </g>
                                </svg>`,
  },
  {
    title: "Teknisi Profesional",
    description:
      "Tim kami terdiri dari teknisi berpengalaman dan terlatih yang mampu menangani segala jenis perbaikan dan perawatan AC dengan cepat dan tepat.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24"
                                    width="15"
                                    height="15"
                                    fill="none"
                                    class="w-8 h-8"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1"/><path d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5"/><path stroke-linejoin="round" d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>`,
  },
  {
    title: "Pelayanan Terbaik",
    description:
      "Kami berkomitmen untuk memberikan pelayanan yang ramah dan solutif kepada setiap pelanggan, memastikan mereka merasa nyaman dan puas dengan hasil kerja kami.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15"
                                    height="15"
                                    fill="none"
                                    class="w-8 h-8"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.745 4h10.568s-.88 13.257-5.284 13.257c-2.15 0-3.461-3.164-4.239-6.4C6.976 7.468 6.745 4 6.745 4"/><path d="M17.313 4s.921-.983 1.687-1c1.5-.034 1.777 1 1.777 1c.294.61.529 2.194-.88 3.657s-2.987 2.743-3.629 3.2M6.745 4S5.785 3.006 5 3c-1.5-.012-1.777 1-1.777 1c-.294.61-.529 2.194.88 3.657a30 30 0 0 0 3.687 3.2M8.507 20c0-1.829 3.522-2.743 3.522-2.743s3.523.914 3.523 2.743z"/></g></svg>`,
  },
  {
    title: "Harga Terjangkau",
    description:
      "Kami menawarkan harga kompetitif untuk layanan kami tanpa mengorbankan kualitas. Anda mendapatkan layanan terbaik dengan biaya yang bersahabat.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15"
                                    height="15"
                                    fill="none"
                                    class="w-8 h-8" ><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191c0 3 5.5 1.5 5.5 4.5c0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5"/></g></svg>`,
  },
  {
    title: "Layanan Cepat Tanggap",
    description:
      "Kami selalu siap merespons kebutuhan perbaikan dan perawatan AC Anda dengan cepat, kapan pun Anda membutuhkannya.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15"
                                    height="15"
                                    fill="none"
                                    class="w-8 h-8"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12h10M7 8h6"/><path d="M3 20.29V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z"/></g></svg>`,
  },
  {
    title: "Garansi Pekerjaan",
    description:
      "Setiap pekerjaan yang kami lakukan dilengkapi dengan garansi, memastikan kepercayaan pelanggan atas kualitas layanan kami.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15"
                                    height="15"
                                    fill="none"
                                    class="w-8 h-8"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.521 2.624a2 2 0 0 1 2.958 0l1.02 1.12a2 2 0 0 0 1.572.651l1.513-.07a2 2 0 0 1 2.092 2.09l-.071 1.514a2 2 0 0 0 .651 1.572l1.12 1.02a2 2 0 0 1 0 2.958l-1.12 1.02a2 2 0 0 0-.651 1.572l.07 1.513a2 2 0 0 1-2.09 2.092l-1.514-.071a2 2 0 0 0-1.572.651l-1.02 1.12a2 2 0 0 1-2.958 0l-1.02-1.12a2 2 0 0 0-1.572-.651l-1.513.07a2 2 0 0 1-2.092-2.09l.071-1.514a2 2 0 0 0-.651-1.572l-1.12-1.02a2 2 0 0 1 0-2.958l1.12-1.02a2 2 0 0 0 .651-1.572l-.07-1.513a2 2 0 0 1 2.09-2.092l1.514.071a2 2 0 0 0 1.572-.651z"/><path stroke-linecap="round" stroke-linejoin="round" d="m9 12l2 2l4-4"/></g></svg>`,
  },
]);

// ABOUT SECTION
// About Section - Contact Info
const contactInfo = ref([
  {
    title: "Alamat Kami",
    description_1:
      "Leeon, GMI Building Jl.Srengseng Sawah No.004 RT.002 RW.007,",
    description_2:
      "Kel.Srengseng sawah Kec.Jagakarsa, Kota ADM.Jakarta Selatan, DKI Jakata 12640",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="15" height=15 viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M9.5 14.5L3 21"/><path fill="currentColor" d="m5 9.485l9.193 9.193l1.697-1.697l-.393-3.787l5.51-4.673l-5.85-5.85l-4.674 5.51l-3.786-.393z"/></g></svg>`,
  },
  {
    title: "Informasi Kontak",
    description_1: "(+62) 878-7691-3139",
    description_2: "feliyateknik@gmail.com",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047c.42 2.783 1.66 7.83 5.283 11.453c3.805 3.805 9.286 5.456 12.302 6.113c1.165.253 2.198-.655 2.198-1.848v-3.584z"/></svg>`,
  },
]);

const mitraList = [
  "PT.DIKIRA GUNA RAKSA",
  "PT.KARYA UTAMA PERDANA",
  "PT.MANUNGGAL SUMBER DAYA",
  "PT.MANGGALA GELORA PERKASA",
  "PT.ABI NATHA MUGIA",
  "DIREKTORAT JENDRAL KETENAGA LISTRIKAN",
  "PT.SAYANA INTEGRA PROFERTI",
  "PT.SAKURA ESTATE MANAJEMENT",
  "KEMENTRIAN ENERGI DAN SUMBER DAYA MINERAL RI",
  "PT.MELAWAI JAYA REALTY",
  "PT.KARYA UTAMA PERDANA",
  "PT.KURNADI ABADI",
  "DIREKTORAT JENDRAL ADMINISTRASI HUKUM UMUM",
  "APARTEMEN SENCY",
  "KEJAKSAAN NEGRI TANGGERANG SELATAN",
];
</script>
