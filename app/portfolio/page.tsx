"use client"

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { X, ArrowRight, MapPin, Maximize2, ChevronLeft, ChevronRight, Images } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type RoofType = "Flat Roof" | "Shingle" | "Siding" | "Custom Copper" | "Eavestrough" | "Aluminum"

type Project = {
  title: string
  location: string
  description: string
  image: string
  type: RoofType
  // When present, this project is a multi-photo job. The card opens a gallery
  // lightbox that steps through every image below.
  images?: string[]
}

const roofTypeFilters = [
  "All Projects",
  "Flat Roof",
  "Shingle",
  "Siding",
  "Custom Copper",
  "Eavestrough",
  "Aluminum",
] as const

const commercialProjects: Project[] = [
  // Low-slope shingle-to-flat conversion, two-ply torch-down — North York (single multi-photo job)
  {
    title: "Low-Slope Shingle-to-Flat Conversion",
    location: "North York, ON",
    description:
      "A large low-slope roof converted from aging shingle to a durable two-ply modified bitumen torch-down system, finished in a light grey granulated cap sheet. The crew torched down the base and cap sheets across the sweeping field, detailing every plumbing stack, plastic vent, and domed skylight, while the surrounding mansard walls were re-clad in matching shingle for a clean, watertight, long-lasting finish.",
    image: "/images/portfolio/residential-torchdown-northyork-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/residential-torchdown-northyork-1.jpg",
      "/images/portfolio/residential-torchdown-northyork-2.jpg",
      "/images/portfolio/residential-torchdown-northyork-3.jpg",
      "/images/portfolio/residential-torchdown-northyork-4.jpg",
      "/images/portfolio/residential-torchdown-northyork-5.jpg",
      "/images/portfolio/residential-torchdown-northyork-6.jpg",
      "/images/portfolio/residential-torchdown-northyork-7.jpg",
      "/images/portfolio/residential-torchdown-northyork-8.jpg",
      "/images/portfolio/residential-torchdown-northyork-9.jpg",
    ],
  },
  // Commercial two-ply torch-down flat roof — Cambridge (single multi-photo job, in-process)
  {
    title: "Two-Ply Torch-Down Flat Roof",
    location: "Cambridge, ON",
    description:
      "A large commercial box-store roof (home to a Treasure Hunt and a 50,000 sq ft Crunch Fitness) re-roofed with a durable two-ply SBS modified-bitumen torch-down system. The crew torch-applied the base sheet and heat-welded a granulated cap sheet across the expansive field, detailing vents and rooftop units and running a wood-plank perimeter guardrail for fall protection — delivering a tough, fully-adhered, watertight roof built for heavy commercial traffic.",
    image: "/images/portfolio/commercial-torchdown-cambridge-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-torchdown-cambridge-1.jpg",
      "/images/portfolio/commercial-torchdown-cambridge-2.jpg",
      "/images/portfolio/commercial-torchdown-cambridge-3.jpg",
      "/images/portfolio/commercial-torchdown-cambridge-4.jpg",
      "/images/portfolio/commercial-torchdown-cambridge-5.jpg",
      "/images/portfolio/commercial-torchdown-cambridge-6.jpg",
      "/images/portfolio/commercial-torchdown-cambridge-7.jpg",
      "/images/portfolio/commercial-torchdown-cambridge-8.jpg",
      "/images/portfolio/commercial-torchdown-cambridge-9.jpg",
      "/images/portfolio/commercial-torchdown-cambridge-10.jpg",
    ],
  },
  // Commercial custom metal capping / flashing — Toronto (single multi-photo job)
  {
    title: "Custom Metal Capping & Flashing",
    location: "Toronto, ON",
    description:
      "Custom-fabricated metal parapet capping and flashing installed along the perimeter of a high-rise commercial flat roof. Each length was bent and mitred on site to wrap the stepped parapet walls and corners cleanly, locking down over the gravel-ballasted roof to shed water, protect the membrane edge, and give the building a crisp, durable, weather-tight finish.",
    image: "/images/portfolio/commercial-metal-capping-toronto-1.jpg",
    type: "Aluminum",
    images: [
      "/images/portfolio/commercial-metal-capping-toronto-1.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-2.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-3.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-4.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-5.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-6.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-7.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-8.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-9.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-10.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-11.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-12.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-13.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-14.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-15.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-16.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-17.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-18.jpg",
      "/images/portfolio/commercial-metal-capping-toronto-19.jpg",
    ],
  },
  // Commercial EPDM flat roof system (single multi-photo job)
  {
    title: "EPDM Flat Roof System",
    location: "Commercial Building",
    description:
      "A large commercial flat roof outfitted with a fully-adhered EPDM (black rubber) membrane system. The crew tore off and prepped the deck around numerous rooftop HVAC units, rolled out and detailed the EPDM sheets, and sealed every vent pipe, drain, and parapet edge for a long-lasting, watertight finish — all completed under a perimeter guardrail safety system.",
    image: "/images/portfolio/commercial-epdm-system-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-epdm-system-1.jpg",
      "/images/portfolio/commercial-epdm-system-2.jpg",
      "/images/portfolio/commercial-epdm-system-3.jpg",
      "/images/portfolio/commercial-epdm-system-4.jpg",
      "/images/portfolio/commercial-epdm-system-5.jpg",
      "/images/portfolio/commercial-epdm-system-6.jpg",
      "/images/portfolio/commercial-epdm-system-7.jpg",
      "/images/portfolio/commercial-epdm-system-8.jpg",
      "/images/portfolio/commercial-epdm-system-9.jpg",
      "/images/portfolio/commercial-epdm-system-10.jpg",
      "/images/portfolio/commercial-epdm-system-11.jpg",
      "/images/portfolio/commercial-epdm-system-12.jpg",
      "/images/portfolio/commercial-epdm-system-13.jpg",
      "/images/portfolio/commercial-epdm-system-14.jpg",
      "/images/portfolio/commercial-epdm-system-15.jpg",
    ],
  },
  // Commercial 4-ply built-up flat roof (single multi-photo job)
  {
    title: "4-Ply Built-Up Flat Roof",
    location: "Commercial Plaza",
    description:
      "A large commercial flat roof rebuilt with a four-ply built-up roofing (BUR) system finished in a light gravel aggregate surface. The crew stripped the old membrane, layered the four plies with hot bitumen around every rooftop HVAC unit and vent, and topped it with ballast gravel for a durable, reflective, watertight finish.",
    image: "/images/portfolio/commercial-4ply-buildup-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-4ply-buildup-1.jpg",
      "/images/portfolio/commercial-4ply-buildup-2.jpg",
      "/images/portfolio/commercial-4ply-buildup-3.jpg",
      "/images/portfolio/commercial-4ply-buildup-4.jpg",
      "/images/portfolio/commercial-4ply-buildup-5.jpg",
      "/images/portfolio/commercial-4ply-buildup-6.jpg",
    ],
  },
  // Commercial TPO flat roof — Belleville (single multi-photo job, in-process)
  {
    title: "TPO Flat Roof System",
    location: "Belleville, ON",
    description:
      "A large commercial plaza flat roof re-covered with a bright white, energy-efficient TPO membrane system. The crew mechanically fastened the cover board and base, then rolled out and heat-welded the reflective single-ply membrane across the expansive field — detailing every curb, vent stack, and rooftop HVAC unit and running a perimeter safety-flag and guardrail setup, working through both sunny and overcast conditions for a durable, watertight finish.",
    image: "/images/portfolio/commercial-tpo-belleville-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-tpo-belleville-1.jpg",
      "/images/portfolio/commercial-tpo-belleville-2.jpg",
      "/images/portfolio/commercial-tpo-belleville-3.jpg",
      "/images/portfolio/commercial-tpo-belleville-4.jpg",
      "/images/portfolio/commercial-tpo-belleville-5.jpg",
      "/images/portfolio/commercial-tpo-belleville-6.jpg",
      "/images/portfolio/commercial-tpo-belleville-7.jpg",
      "/images/portfolio/commercial-tpo-belleville-8.jpg",
      "/images/portfolio/commercial-tpo-belleville-9.jpg",
      "/images/portfolio/commercial-tpo-belleville-10.jpg",
      "/images/portfolio/commercial-tpo-belleville-11.jpg",
      "/images/portfolio/commercial-tpo-belleville-12.jpg",
      "/images/portfolio/commercial-tpo-belleville-13.jpg",
      "/images/portfolio/commercial-tpo-belleville-14.jpg",
      "/images/portfolio/commercial-tpo-belleville-15.jpg",
      "/images/portfolio/commercial-tpo-belleville-16.jpg",
      "/images/portfolio/commercial-tpo-belleville-17.jpg",
      "/images/portfolio/commercial-tpo-belleville-18.jpg",
      "/images/portfolio/commercial-tpo-belleville-19.jpg",
      "/images/portfolio/commercial-tpo-belleville-20.jpg",
      "/images/portfolio/commercial-tpo-belleville-21.jpg",
      "/images/portfolio/commercial-tpo-belleville-22.jpg",
      "/images/portfolio/commercial-tpo-belleville-23.jpg",
      "/images/portfolio/commercial-tpo-belleville-24.jpg",
      "/images/portfolio/commercial-tpo-belleville-25.jpg",
      "/images/portfolio/commercial-tpo-belleville-26.jpg",
      "/images/portfolio/commercial-tpo-belleville-27.jpg",
    ],
  },
  // Commercial two-ply torch-down flat roof — Etobicoke (single multi-photo job, in-process)
  {
    title: "Two-Ply Torch-Down Flat Roof",
    location: "Etobicoke, ON",
    description:
      "In-progress shots of a large commercial re-roof using a two-ply modified bitumen torch-down system. The crew rebuilt sections of the wood plank deck, laid protection board and a mechanically fastened base sheet, then torched down the granulated cap sheet across the field — detailing every curb, vent stack, and HVAC penetration around dozens of rooftop units under a perimeter guardrail safety setup.",
    image: "/images/portfolio/commercial-torchdown-etobicoke2-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-torchdown-etobicoke2-1.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-2.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-3.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-4.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-5.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-9.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-6.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-7.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-8.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-10.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-11.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-12.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-13.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-14.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-15.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-16.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-17.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-18.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-19.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-20.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-21.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke2-22.jpg",
    ],
  },
  // Commercial TPO flat roof — Thunder Bay (single multi-photo job)
  {
    title: "TPO Flat Roof System",
    location: "Thunder Bay, Ontario",
    description:
      "A large commercial flat roof finished with a bright white, energy-efficient TPO membrane system. The crew installed the reflective single-ply membrane across the full field, heat-welding the seams and detailing every curb, HVAC unit, and parapet edge for a durable, watertight roof — working through cold, overcast conditions under a perimeter guardrail safety setup.",
    image: "/images/portfolio/commercial-tpo-thunder-bay-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-tpo-thunder-bay-1.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-2.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-3.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-4.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-5.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-6.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-7.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-8.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-9.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-10.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-11.jpg",
      "/images/portfolio/commercial-tpo-thunder-bay-12.jpg",
    ],
  },
  // Commercial gravel & roof-layer tear-off — Thunder Bay (single multi-photo job)
  {
    title: "Commercial Gravel & Roof Layer Removal",
    location: "Thunder Bay, Ontario",
    description:
      "A large commercial re-roof beginning with a full tear-off of the existing gravel ballast and old roofing layers. The crew hand-shoveled and wheelbarrowed the aggregate off the deck, removed the aged membrane down to the substrate, and staged the roof for a new watertight system, working around rooftop HVAC units and gas lines under a perimeter safety setup.",
    image: "/images/portfolio/commercial-teardown-thunder-bay-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-teardown-thunder-bay-1.jpg",
      "/images/portfolio/commercial-teardown-thunder-bay-2.jpg",
      "/images/portfolio/commercial-teardown-thunder-bay-3.jpg",
      "/images/portfolio/commercial-teardown-thunder-bay-4.jpg",
      "/images/portfolio/commercial-teardown-thunder-bay-5.jpg",
      "/images/portfolio/commercial-teardown-thunder-bay-6.jpg",
    ],
  },
  // Commercial two-ply torch-down flat roof — Mississauga (single multi-photo job)
  {
    title: "Two-Ply Torch-Down Flat Roof",
    location: "Mississauga, ON",
    description:
      "A large commercial flat roof finished with a two-ply modified bitumen torch-down system topped with a reddish-brown granulated cap sheet. The gallery follows the job from tear-off and staging of Soprema insulation through deck prep, base-sheet and cap-sheet installation, and the completed roof — with the crew working around dozens of rooftop HVAC units, gas lines, and skylights, detailing every curb, vent stack, and parapet edge under a perimeter guardrail safety system for a durable, watertight finish.",
    image: "/images/portfolio/commercial-torchdown-mississauga-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-torchdown-mississauga-1.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-2.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-3.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-4.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-5.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-6.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-7.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-8.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-9.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-10.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-11.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-12.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-13.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-14.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-15.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-16.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-17.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-18.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-19.jpg",
      "/images/portfolio/commercial-torchdown-mississauga-20.jpg",
    ],
  },
  // Commercial modified bitumen two-ply torch-down — Toronto (single multi-photo job)
  {
    title: "Modified Bitumen Torch-Down Roof",
    location: "Toronto",
    description:
      "A large commercial flat roof replaced with a two-ply modified bitumen torch-down system. The crew tore off the old roof, laid the base and granulated cap sheets around dozens of rooftop HVAC units, and detailed every vent stack and drain for a clean, watertight finish.",
    image: "/images/portfolio/commercial-modbit-toronto-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-modbit-toronto-1.jpg",
      "/images/portfolio/commercial-modbit-toronto-2.jpg",
      "/images/portfolio/commercial-modbit-toronto-3.jpg",
      "/images/portfolio/commercial-modbit-toronto-4.jpg",
      "/images/portfolio/commercial-modbit-toronto-5.jpg",
      "/images/portfolio/commercial-modbit-toronto-6.jpg",
      "/images/portfolio/commercial-modbit-toronto-7.jpg",
    ],
  },
  // Commercial inverted flat roof — Etobicoke (single 53-photo job)
  {
    title: "Commercial Flat Roof Replacement",
    location: "Etobicoke",
    description:
      "A full commercial inverted flat roof replacement captured end to end: SOPREMA rigid insulation, a two-ply granulated torch-down membrane, parapet and vent-stack flashing, drain servicing, and a perimeter guard-rail safety system — 53 photos from tear-off to finished roof.",
    image: "/images/portfolio/commercial-torchdown-etobicoke-1.jpg",
    type: "Flat Roof",
    images: [
      "/images/portfolio/commercial-torchdown-etobicoke-1.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-5.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-9.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-10.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-3.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-4.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-2.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-6.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-7.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-8.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-11.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-12.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-13.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-14.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-15.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-16.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-17.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-18.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-19.jpg",
      "/images/portfolio/commercial-torchdown-etobicoke-20.jpg",
      "/images/portfolio/commercial-soprema-flat-1.jpg",
      "/images/portfolio/commercial-soprema-flat-2.jpg",
      "/images/portfolio/commercial-soprema-flat-3.jpg",
      "/images/portfolio/commercial-soprema-flat-4.jpg",
      "/images/portfolio/commercial-soprema-flat-5.jpg",
      "/images/portfolio/commercial-soprema-flat-6.jpg",
      "/images/portfolio/commercial-soprema-flat-7.jpg",
      "/images/portfolio/commercial-soprema-flat-8.jpg",
      "/images/portfolio/commercial-soprema-flat-9.jpg",
      "/images/portfolio/commercial-soprema-flat-10.jpg",
      "/images/portfolio/commercial-soprema-flat-11.jpg",
      "/images/portfolio/commercial-soprema-flat-12.jpg",
      "/images/portfolio/commercial-soprema-flat-13.jpg",
      "/images/portfolio/commercial-soprema-flat-14.jpg",
      "/images/portfolio/commercial-highrise-torchdown-1.jpg",
      "/images/portfolio/commercial-highrise-torchdown-2.jpg",
      "/images/portfolio/commercial-highrise-torchdown-3.jpg",
      "/images/portfolio/commercial-highrise-torchdown-4.jpg",
      "/images/portfolio/commercial-highrise-torchdown-5.jpg",
      "/images/portfolio/commercial-highrise-torchdown-6.jpg",
      "/images/portfolio/commercial-highrise-torchdown-7.jpg",
      "/images/portfolio/commercial-highrise-torchdown-8.jpg",
      "/images/portfolio/commercial-highrise-torchdown-9.jpg",
      "/images/portfolio/commercial-highrise-torchdown-10.jpg",
      "/images/portfolio/commercial-highrise-torchdown-11.jpg",
      "/images/portfolio/commercial-highrise-torchdown-12.jpg",
      "/images/portfolio/commercial-highrise-torchdown-13.jpg",
      "/images/portfolio/commercial-highrise-torchdown-14.jpg",
      "/images/portfolio/commercial-highrise-torchdown-15.jpg",
      "/images/portfolio/commercial-highrise-torchdown-16.jpg",
      "/images/portfolio/commercial-highrise-torchdown-17.jpg",
      "/images/portfolio/commercial-highrise-torchdown-18.jpg",
    ],
  },
  {
    title: "Flat Roof Replacement",
    location: "Deer Park",
    description: "Complete commercial flat roof replacement with modified bitumen membrane and integrated skylights.",
    image: "/images/portfolio/flat-roof-deer-park-before.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Etobicoke",
    description: "Large-scale commercial flat roof installation with premium membrane system and proper drainage solutions.",
    image: "/images/portfolio/flat-roof-etobicoke.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Etobicoke",
    description: "Installation in progress at sunset - membrane being rolled out on this expansive commercial roof with Toronto skyline views.",
    image: "/images/portfolio/flat-roof-etobicoke-installation.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Jones Ave & Dundas",
    description: "Multi-unit commercial flat roof with integrated skylights and premium membrane system for long-term protection.",
    image: "/images/portfolio/flat-roof-jones-dundas.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "The Danforth",
    description: "Complete tear-off and replacement of commercial flat roof with new decking and premium membrane system.",
    image: "/images/portfolio/flat-roof-danforth-installation.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Eglington West",
    description: "Before photo showing deteriorated flat roof with ponding water, debris accumulation, and membrane failure requiring replacement.",
    image: "/images/portfolio/flat-roof-eglington-west-before.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Eglington West",
    description: "Installation in progress with new insulation boards and membrane being applied over existing structure.",
    image: "/images/portfolio/flat-roof-eglington-west-installation.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Eglington West",
    description: "Completed flat roof with clean EPDM membrane, professional metal edge trim, and seamless integration with shingle sections.",
    image: "/images/portfolio/flat-roof-eglington-west-completed.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Humber Summit",
    description: "Side-by-side view of exposed decking and new membrane installation on this commercial flat roof replacement.",
    image: "/images/portfolio/flat-roof-humber-summit-installation.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Humber Summit",
    description: "Installation showing propane torch, insulation boards, and membrane materials staged for professional application.",
    image: "/images/portfolio/flat-roof-humber-summit-installation-2.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Humber Summit",
    description: "Completed commercial flat roof with premium gray membrane system providing long-term weatherproofing.",
    image: "/images/portfolio/flat-roof-humber-summit-completed.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Humber Summit",
    description: "Completed white reflective membrane with clean seam lines and professional aluminum edge trim.",
    image: "/images/portfolio/flat-roof-humber-summit-completed-3.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Humber Summit",
    description: "Installation showing gray membrane with rigid insulation boards being applied by professional crew.",
    image: "/images/portfolio/flat-roof-humber-summit-installation-3.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Eglington West",
    description: "Installation showing fiberboard insulation, membrane rolls, and torch equipment staged for application.",
    image: "/images/portfolio/flat-roof-eglington-west-installation-3.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Eglington West",
    description: "Completed gray membrane sections meeting shingle roof with professional aluminum edge trim.",
    image: "/images/portfolio/flat-roof-eglington-west-completed-3.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Humber Summit",
    description: "Completed white reflective membrane with clean seam lines and professional aluminum edge trim on commercial building.",
    image: "/images/portfolio/flat-roof-humber-summit-completed-4.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Humber Summit",
    description: "Completed gray membrane with vent pipes and professional aluminum edge trim, street view visible.",
    image: "/images/portfolio/flat-roof-humber-summit-completed-5.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Humber Summit",
    description: "Installation showing dual membrane sections with insulation boards and professional crew at work.",
    image: "/images/portfolio/flat-roof-humber-summit-installation-4.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Eglington West",
    description: "Dual view showing damaged wet membrane before and installation progress with skylight and brick wall.",
    image: "/images/portfolio/flat-roof-eglington-west-installation-4.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Eglington West",
    description: "Dual completed view showing gray membrane with aluminum edge trim from multiple angles.",
    image: "/images/portfolio/flat-roof-eglington-west-completed-4.png",
    type: "Flat Roof",
  },
]

const industrialProjects: Project[] = [
  {
    title: "Cool Flat Roof",
    location: "Don Mills",
    description: "White reflective membrane installation reducing cooling costs while extending roof life significantly.",
    image: "/images/portfolio/cool-flat-don-mills-completed.png",
    type: "Flat Roof",
  },
  {
    title: "Cool Flat Roof",
    location: "Don Mills",
    description: "Before photo showing deteriorated membrane with patches and wear, Eclipse truck visible on site ready for replacement.",
    image: "/images/portfolio/cool-flat-don-mills-before.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Re-Cover",
    location: "North York",
    description: "Complete flat roof re-cover with Toronto skyline views, featuring cedar shake shingles and membrane sections.",
    image: "/images/portfolio/flat-recover-north-york-completed-2.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Re-Cover",
    location: "North York",
    description: "Before photo showing damaged membrane requiring professional re-cover to restore weatherproofing.",
    image: "/images/portfolio/flat-recover-north-york-before.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Re-Cover",
    location: "North York",
    description: "Before photo showing aged flat roof membrane with pool and shingles visible, ready for professional re-cover.",
    image: "/images/portfolio/flat-recover-north-york-before-2.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Re-Cover",
    location: "North York",
    description: "Completed re-cover with white reflective membrane, skylight integration, and cedar shake shingles on adjacent sections.",
    image: "/images/portfolio/flat-recover-north-york-completed-3.png",
    type: "Flat Roof",
  },
]

const residentialProjects: Project[] = [
  {
    title: "Cool Flat Roof Replacement",
    location: "Roncesvalles",
    description: "Energy-efficient white reflective membrane completed, reducing cooling costs and extending roof life.",
    image: "/images/portfolio/cool-roof-roncesvalles-completed-2.png",
    type: "Flat Roof",
  },
  {
    title: "Cool Flat Roof Replacement",
    location: "Roncesvalles",
    description: "Before photo showing deteriorated flat roof with patches and wear requiring full replacement.",
    image: "/images/portfolio/cool-roof-roncesvalles-before.png",
    type: "Flat Roof",
  },
  {
    title: "Cool Flat Roof Replacement",
    location: "Roncesvalles",
    description: "Complete tear-off revealing exposed joists and damaged insulation requiring full structural repair.",
    image: "/images/portfolio/cool-roof-roncesvalles-joists.png",
    type: "Flat Roof",
  },
  {
    title: "Cool Flat Roof Replacement",
    location: "Roncesvalles",
    description: "Installation in progress with black membrane rolls and torch-down application method on residential flat roof.",
    image: "/images/portfolio/cool-flat-roncesvalles-installation.png",
    type: "Flat Roof",
  },
  {
    title: "Cool Flat Roof Replacement",
    location: "Roncesvalles",
    description: "Completed white reflective membrane around chimney structure with professional edge trim and flashing.",
    image: "/images/portfolio/cool-flat-roncesvalles-completed.png",
    type: "Flat Roof",
  },
  {
    title: "Cool Flat Roof Replacement",
    location: "Roncesvalles",
    description: "Before photo showing severely deteriorated flat roof with visible damage and multiple patches requiring full replacement.",
    image: "/images/portfolio/cool-flat-roncesvalles-before.png",
    type: "Flat Roof",
  },
  {
    title: "Shingle Roof Replacement",
    location: "Roncesvalles",
    description: "Warm brown architectural shingles with ridge vents, complementing the neighbourhood's character.",
    image: "/images/portfolio/shingle-roncesvalles-completed.png",
    type: "Shingle",
  },
  {
    title: "Shingle Roof Replacement",
    location: "The Queensway",
    description: "Dark gray architectural shingles with excellent ventilation and crisp ridge cap installation.",
    image: "/images/portfolio/shingle-queensway-completed.png",
    type: "Shingle",
  },
  {
    title: "Shingle Roof Replacement",
    location: "The Queensway",
    description: "Tear-off in progress showing exposed plywood decking and worker preparing for new underlayment installation.",
    image: "/images/portfolio/shingle-queensway-installation.png",
    type: "Shingle",
  },
  {
    title: "Shingle Roof Replacement",
    location: "The Queensway",
    description: "Complete tear-off showing exposed roof decking with aerial view of surrounding neighbourhood.",
    image: "/images/portfolio/shingle-queensway-decking.png",
    type: "Shingle",
  },
  {
    title: "Shingle Roof Replacement",
    location: "Palmerston",
    description: "Installation in progress showing new plywood sheathing and synthetic underlayment for superior protection.",
    image: "/images/portfolio/shingle-palmerston-installation.png",
    type: "Shingle",
  },
  {
    title: "Shingle Roof Replacement",
    location: "Palmerston",
    description: "Before photo showing damaged shingle with exposed nails and deteriorated sealant requiring full replacement.",
    image: "/images/portfolio/shingle-palmerston-before.png",
    type: "Shingle",
  },
  {
    title: "Shingle Roof Replacement",
    location: "Palmerston",
    description: "Installation showing new plywood sheathing, skylights, and synthetic underlayment with worker applying materials.",
    image: "/images/portfolio/shingle-palmerston-installation-2.png",
    type: "Shingle",
  },
  {
    title: "Custom Copper Awning",
    location: "Forest Hill",
    description: "Handcrafted copper awning installation featuring elegant curves and premium detailing for a stunning entrance.",
    image: "/images/portfolio/copper-forest-hill-completed.png",
    type: "Custom Copper",
  },
  {
    title: "Custom Copper Installation",
    location: "Forest Hill",
    description: "Installation in progress showing copper panels being fitted with ice and water shield underlayment.",
    image: "/images/portfolio/copper-forest-hill-installation.png",
    type: "Custom Copper",
  },
  {
    title: "Flat Roof with Skylights",
    location: "Greenwood",
    description: "Residential flat roof replacement featuring dual skylights for natural light and modern membrane roofing.",
    image: "/images/portfolio/flat-roof-greenwood.png",
    type: "Flat Roof",
  },
  {
    title: "Cool Shingle Roof",
    location: "Leslieville",
    description: "Energy-efficient cool roof installation combining reflective flat roof sections with traditional shingles.",
    image: "/images/portfolio/cool-shingle-leslieville-completed.png",
    type: "Shingle",
  },
  {
    title: "Cool Shingle Roof",
    location: "Leslieville",
    description: "Before photo showing aged green shingles with wear and discoloration requiring full replacement.",
    image: "/images/portfolio/cool-shingle-leslieville-before.png",
    type: "Shingle",
  },
  {
    title: "Shingle Roof Replacement",
    location: "Roncesvalles",
    description: "Installation showing RhinoRoof synthetic underlayment with rope safety line on steep pitch roof.",
    image: "/images/portfolio/shingle-roncesvalles-installation-2.png",
    type: "Shingle",
  },
  {
    title: "Flat Roof Replacement",
    location: "Greenwood",
    description: "Before photo showing extensive tear-off with exposed wood decking, dual skylights, and chimney requiring full replacement.",
    image: "/images/portfolio/flat-roof-greenwood-before.png",
    type: "Flat Roof",
  },
  {
    title: "Shingle Roof Replacement",
    location: "Palmerston",
    description: "Premium gray architectural shingles with crisp ridge lines installed in Toronto's historic neighbourhood.",
    image: "/images/portfolio/shingle-palmerston-completed.png",
    type: "Shingle",
  },
  {
    title: "Siding & Aluminum",
    location: "Greenwood",
    description: "Complete exterior renovation with premium white siding, dark aluminum accents, and new roofing.",
    image: "/images/portfolio/siding-greenwood-completed.png",
    type: "Siding",
  },
  {
    title: "Siding & Aluminum Installation",
    location: "Greenwood",
    description: "Installation in progress showing EnergyShield continuous insulation being applied before siding.",
    image: "/images/portfolio/siding-greenwood-insulation.png",
    type: "Siding",
  },
  {
    title: "Siding & Aluminum",
    location: "Greenwood",
    description: "Before photo showing home mid-renovation with new cedar shake shingles and gray painted brick exterior.",
    image: "/images/portfolio/siding-greenwood-before.png",
    type: "Siding",
  },
  {
    title: "Aluminum Fascia & Soffit",
    location: "Greenwood",
    description: "Installation showing exposed fascia and soffit being wrapped in custom aluminum on this white-sided home.",
    image: "/images/portfolio/siding-greenwood-installation-2.png",
    type: "Aluminum",
  },
  {
    title: "Eavestrough Replacement",
    location: "Cedarvale",
    description: "New eavestrough system providing optimal drainage and foundation protection for this brick home.",
    image: "/images/portfolio/eavestrough-cedarvale-completed.png",
    type: "Eavestrough",
  },
  {
    title: "Eavestrough Replacement",
    location: "Cedarvale",
    description: "Before photo showing existing downspout and eavestrough system requiring replacement.",
    image: "/images/portfolio/eavestrough-cedarvale-before.png",
    type: "Eavestrough",
  },
  {
    title: "Eavestrough Drainage",
    location: "Cedarvale",
    description: "Underground drainage pipe installation directing downspout runoff away from foundation.",
    image: "/images/portfolio/eavestrough-cedarvale-drain.png",
    type: "Eavestrough",
  },
  {
    title: "Eavestrough Replacement",
    location: "Cedarvale",
    description: "Completed brown eavestrough installation on brick home with seamless corners and downspout.",
    image: "/images/portfolio/eavestrough-cedarvale-completed-2.png",
    type: "Eavestrough",
  },
  {
    title: "Eavestrough Replacement",
    location: "Cedarvale",
    description: "Completed eavestrough system on brick bungalow showing full corner view with new downspout.",
    image: "/images/portfolio/eavestrough-cedarvale-completed-3.png",
    type: "Eavestrough",
  },
  {
    title: "Cool Flat Roof",
    location: "Roncesvalles",
    description: "Energy-efficient white reflective membrane installation against classic brick, reducing cooling costs significantly.",
    image: "/images/portfolio/cool-roof-roncesvalles-completed.png",
    type: "Flat Roof",
  },
  {
    title: "Shingle Roof Replacement",
    location: "Roncesvalles",
    description: "Warm brown architectural shingles with excellent ventilation, complementing the neighbourhood's character.",
    image: "/images/portfolio/shingle-roncesvalles.png",
    type: "Shingle",
  },
  {
    title: "Flat Roof with Skylights",
    location: "Curzon St",
    description: "Complete flat roof replacement featuring multiple skylights and premium modified bitumen membrane.",
    image: "/images/portfolio/flat-roof-curzon-greenwood.png",
    type: "Flat Roof",
  },
  {
    title: "Synthetic Slate & Shingle",
    location: "Windfields",
    description: "Premium synthetic slate with architectural shingles and flat roof sections on a luxury new construction.",
    image: "/images/portfolio/slate-shingle-windfields-completed.png",
    type: "Shingle",
  },
  {
    title: "Synthetic Slate & Shingle",
    location: "Windfields",
    description: "Completed installation showing elegant gray synthetic slate tiles with architectural shingles on this luxury home.",
    image: "/images/portfolio/slate-shingle-windfields-completed-2.png",
    type: "Shingle",
  },
  {
    title: "Slate & Shingle Installation",
    location: "Windfields",
    description: "Winter installation showing new plywood sheathing and ice & water shield underlayment on this luxury home.",
    image: "/images/portfolio/slate-shingle-windfields-before.png",
    type: "Shingle",
  },
  {
    title: "Slate & Shingle Installation",
    location: "Windfields",
    description: "Winter installation showing exposed plywood sheathing with skylight cutout on luxury new construction.",
    image: "/images/portfolio/slate-shingle-windfields-before-3.png",
    type: "Shingle",
  },
  {
    title: "Synthetic Slate & Shingle",
    location: "Windfields",
    description: "Dual view showing completed gray synthetic slate with white flat roof sections on luxury home.",
    image: "/images/portfolio/slate-shingle-windfields-completed-4.png",
    type: "Shingle",
  },
  {
    title: "Flat Roof with Skylights",
    location: "Curzon St",
    description: "Installation in progress showing modified bitumen membrane and dual skylights on residential flat roof.",
    image: "/images/portfolio/flat-roof-curzon-installation.png",
    type: "Flat Roof",
  },
  {
    title: "Cool Flat Roof Replacement",
    location: "Roncesvalles",
    description: "Completed gray granulated membrane with black metal edge trim on angled roof section.",
    image: "/images/portfolio/cool-flat-roncesvalles-completed-2.png",
    type: "Flat Roof",
  },
  {
    title: "Cool Flat Roof Replacement",
    location: "Roncesvalles",
    description: "Before photo showing deteriorated membrane with tar patches around chimney base requiring replacement.",
    image: "/images/portfolio/cool-flat-roncesvalles-before-2.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Eglington West",
    description: "Before and after showing dormer window repair with new black membrane surround.",
    image: "/images/portfolio/flat-roof-eglington-west-beforeafter.png",
    type: "Flat Roof",
  },
  {
    title: "Flat Roof Replacement",
    location: "Greenwood",
    description: "Dual view showing fiberboard insulation installation and completed black membrane with roof vent.",
    image: "/images/portfolio/flat-roof-greenwood-installation.png",
    type: "Flat Roof",
  },
  {
    title: "Shingle Roof Replacement",
    location: "Palmerston",
    description: "Completed gray architectural shingles with multiple skylights, ridge vent, and valley integration.",
    image: "/images/portfolio/shingle-palmerston-completed-2.png",
    type: "Shingle",
  },
  {
    title: "Shingle Roof Replacement",
    location: "Roncesvalles",
    description: "Completed warm brown architectural shingles with roof vent on steep pitch residential roof.",
    image: "/images/portfolio/shingle-roncesvalles-completed-3.png",
    type: "Shingle",
  },
  {
    title: "Siding & Aluminum",
    location: "Greenwood",
    description: "Completed modern white horizontal siding with black trim accents on renovated Toronto home.",
    image: "/images/portfolio/siding-greenwood-completed-3.png",
    type: "Siding",
  },
  {
    title: "Siding & Aluminum",
    location: "Greenwood",
    description: "Dual view showing completed white board-and-batten siding with deck from backyard angles.",
    image: "/images/portfolio/siding-greenwood-completed-4.png",
    type: "Siding",
  },
  {
    title: "Siding & Aluminum",
    location: "Greenwood",
    description: "Completed white siding with gray accents showing rear view with deck and cedar fence.",
    image: "/images/portfolio/siding-greenwood-completed-5.png",
    type: "Siding",
  },
  {
    title: "Aluminum Edge & Trim",
    location: "Greenwood",
    description: "Completed gray granulated cool flat roof section with custom black aluminum metal edge trim meeting shingles.",
    image: "/images/portfolio/siding-greenwood-installation-3.png",
    type: "Aluminum",
  },
  {
    title: "Kindl Siding Installation",
    location: "New Toronto",
    description: "Premium charred wood (Shou Sugi Ban) Kindl siding on modern home in Etobicoke with clean lines.",
    image: "/images/portfolio/kindl-new-toronto-completed.png",
    type: "Siding",
  },
  {
    title: "Cool Flat Roof",
    location: "Don Mills",
    description: "Large white reflective membrane installation with dual skylights on luxury residential property.",
    image: "/images/portfolio/cool-flat-don-mills-completed-2.png",
    type: "Flat Roof",
  },
  {
    title: "Siding & Aluminum",
    location: "Greenwood",
    description: "Close-up of completed white horizontal siding with dark soffit trim and copper accents at roofline.",
    image: "/images/portfolio/siding-greenwood-completed-6.png",
    type: "Siding",
  },
  {
    title: "Shingle & Flat Roof",
    location: "Palmerston",
    description: "Completed gray granulated flat membrane meeting dark architectural shingles with integrated roof vents.",
    image: "/images/portfolio/shingle-flat-palmerston-completed.png",
    type: "Shingle",
  },
  {
    title: "Kindl Siding Installation",
    location: "New Toronto",
    description: "Completed charred wood (Shou Sugi Ban) Kindl siding showing corner detail with window and lantern.",
    image: "/images/portfolio/kindl-new-toronto-completed-2.jpg",
    type: "Siding",
  },
  {
    title: "Kindl Siding Installation",
    location: "New Toronto",
    description: "Installation showing Tyvek house wrap with RONA strapping, partial Kindl siding applied at bottom.",
    image: "/images/portfolio/kindl-new-toronto-installation.png",
    type: "Siding",
  },
  {
    title: "Kindl Siding Installation",
    location: "New Toronto",
    description: "Before photo showing deteriorated soffit area with exposed wood and insulation damage requiring replacement.",
    image: "/images/portfolio/kindl-new-toronto-before.png",
    type: "Siding",
  },
  {
    title: "Kindl Siding Installation",
    location: "New Toronto",
    description: "Completed charred black Kindl siding front view with large windows and matching lanterns.",
    image: "/images/portfolio/kindl-new-toronto-completed-3.png",
    type: "Siding",
  },
  {
    title: "Kindl Siding Installation",
    location: "New Toronto",
    description: "Installation showing Tyvek house wrap with strapping ready for Kindl siding application.",
    image: "/images/portfolio/kindl-new-toronto-installation-2.png",
    type: "Siding",
  },
  {
    title: "Kindl Siding Installation",
    location: "New Toronto",
    description: "Completed reddish-brown vertical Kindl board-and-batten siding with large window.",
    image: "/images/portfolio/kindl-new-toronto-completed-brown.png",
    type: "Siding",
  },
  {
    title: "Kindl Siding Installation",
    location: "New Toronto",
    description: "Completed charred black Kindl siding side view with small window detail.",
    image: "/images/portfolio/kindl-new-toronto-completed-side.jpg",
    type: "Siding",
  },
  {
    title: "Kindl Siding Installation",
    location: "New Toronto",
    description: "Completed dual-tone charred wood corner showing gray and reddish-brown Kindl siding meeting.",
    image: "/images/portfolio/kindl-new-toronto-completed-corner.jpg",
    type: "Siding",
  },
]

function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left w-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-muted">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="absolute inset-0 w-[120%] h-[140%] object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 bg-background/90 text-foreground text-xs font-semibold uppercase tracking-wide">
            {project.type}
          </span>
          {project.images && project.images.length > 1 && (
            <span className="flex items-center gap-1.5 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide">
              <Images className="w-3.5 h-3.5" />
              {project.images.length} Photos
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Maximize2 className="w-5 h-5 text-accent-foreground" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
        <MapPin className="w-3.5 h-3.5" />
        {project.location}
      </div>
      <p className="text-muted-foreground text-sm mt-2">
        {project.description}
      </p>
    </button>
  )
}

function CategorySection({
  title,
  subtitle,
  projects,
  onImageClick,
  id,
  filterKey
}: {
  title: string
  subtitle: string
  projects: Project[]
  onImageClick: (images: string[], title: string) => void
  id: string
  filterKey: string
}) {
  const ref = useScrollAnimation([filterKey])

  if (projects.length === 0) return null

  return (
    <section id={id} className="py-20 lg:py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 animate-on-scroll">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">{title}</h2>
            <p className="text-muted-foreground mt-2 text-lg">{subtitle}</p>
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {projects.length} {projects.length === 1 ? "Project" : "Projects"}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project, i) => (
            <div key={`${project.title}-${project.location}-${project.image}-${i}`} className={`animate-on-scroll stagger-${Math.min(i + 1, 6)}`}>
              <ProjectCard
                project={project}
                onClick={() => onImageClick(project.images ?? [project.image], project.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  const [gallery, setGallery] = useState<{ images: string[]; title: string; index: number } | null>(null)
  const [activeType, setActiveType] = useState<(typeof roofTypeFilters)[number]>("All Projects")
  const ref = useScrollAnimation()

  const handleImageClick = (images: string[], title: string) => {
    setGallery({ images, title, index: 0 })
  }

  const closeGallery = useCallback(() => setGallery(null), [])

  const showNext = useCallback(() => {
    setGallery((g) => (g ? { ...g, index: (g.index + 1) % g.images.length } : g))
  }, [])

  const showPrev = useCallback(() => {
    setGallery((g) => (g ? { ...g, index: (g.index - 1 + g.images.length) % g.images.length } : g))
  }, [])

  useEffect(() => {
    if (!gallery) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [gallery, closeGallery, showNext, showPrev])

  const filterByType = (projects: Project[]) =>
    activeType === "All Projects" ? projects : projects.filter((p) => p.type === activeType)

  const filteredCommercial = filterByType(commercialProjects)
  const filteredIndustrial = filterByType(industrialProjects)
  const filteredResidential = filterByType(residentialProjects)

  const totalResults = filteredCommercial.length + filteredIndustrial.length + filteredResidential.length

  return (
    <>
      <Header />
      <main ref={ref}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
                Our Work
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed max-w-2xl">
                Browse completed projects across commercial, industrial, and residential properties throughout the Greater Toronto Area.
              </p>
            </div>

            {/* Roof Type Filters */}
            <div className="flex flex-wrap gap-3 mt-10 animate-on-scroll stagger-1">
              {roofTypeFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveType(filter)}
                  className={`px-5 py-2.5 font-medium transition-colors ${
                    activeType === filter
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {totalResults === 0 ? (
          <div className="bg-background py-28 text-center">
            <p className="text-lg text-muted-foreground">No projects in this category yet. Check back soon.</p>
          </div>
        ) : (
          <>
            {/* Commercial Section */}
            <div className="bg-background">
              <CategorySection
                id="commercial"
                title="Commercial"
                subtitle="Office buildings, retail spaces, and commercial properties"
                projects={filteredCommercial}
                onImageClick={handleImageClick}
                filterKey={activeType}
              />
            </div>

            {filteredCommercial.length > 0 && (filteredIndustrial.length > 0 || filteredResidential.length > 0) && (
              <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="h-px bg-border" />
              </div>
            )}

            {/* Industrial Section */}
            <div className="bg-background">
              <CategorySection
                id="industrial"
                title="Industrial"
                subtitle="Warehouses, factories, and large-scale facilities"
                projects={filteredIndustrial}
                onImageClick={handleImageClick}
                filterKey={activeType}
              />
            </div>

            {filteredIndustrial.length > 0 && filteredResidential.length > 0 && (
              <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="h-px bg-border" />
              </div>
            )}

            {/* Residential Section */}
            <div className="bg-background">
              <CategorySection
                id="residential"
                title="Residential"
                subtitle="Homes and multi-unit residential buildings"
                projects={filteredResidential}
                onImageClick={handleImageClick}
                filterKey={activeType}
              />
            </div>
          </>
        )}

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-accent">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground leading-tight">
                  Your Project Could Be Next
                </h2>
                <p className="text-accent-foreground/80 text-lg mt-4 max-w-xl">
                  Ready to transform your property? Contact us today for a free consultation and estimate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent font-semibold px-8">
                  <a href="tel:+16472589434">Call 647-258-9434</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox / Gallery */}
      {gallery && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
          role="dialog"
          aria-modal="true"
          aria-label={`${gallery.title} photo gallery`}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors z-10"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <X className="h-8 w-8" />
          </button>

          {gallery.images.length > 1 && (
            <>
              <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  showPrev()
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  showNext()
                }}
                aria-label="Next photo"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <div
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery.images[gallery.index] || "/placeholder.svg"}
              alt={`${gallery.title} — photo ${gallery.index + 1} of ${gallery.images.length}`}
              className="max-w-full max-h-full object-contain"
              style={{ objectPosition: 'center 15%' }}
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-bold text-white">{gallery.title}</h3>
            {gallery.images.length > 1 && (
              <p className="text-white/60 text-sm mt-1">
                {gallery.index + 1} / {gallery.images.length}
              </p>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
