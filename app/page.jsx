"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [teacherSearch, setTeacherSearch] = useState("")
  const [moduleSearch, setModuleSearch] = useState("")
  const [selectedExamTypes, setSelectedExamTypes] = useState({
    finalExam: false,
    semiExam: false,
  })

  // Sample data - replace with your actual data
  const teachers = [
    "Dr. Smith",
    "Prof. Johnson",
    "Dr. Williams",
    "Prof. Brown",
    "Dr. Davis",
    "Dr. Miller",
    "Prof. Wilson",
    "Dr. Moore",
    "Prof. Taylor",
    "Dr. Anderson",
  ]

  const modules = [
    "Mathematics",
    "Physics",
    "Computer Science",
    "Chemistry",
    "Biology",
    "Statistics",
    "Data Structures",
    "Algorithms",
    "Database Systems",
    "Operating Systems",
  ]

  // Filter functions
  const filteredTeachers = teachers.filter((teacher) => teacher.toLowerCase().includes(teacherSearch.toLowerCase()))

  const filteredModules = modules.filter((module) => module.toLowerCase().includes(moduleSearch.toLowerCase()))

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">ExamBank</h1>
          <p className="mt-2 text-gray-600">Find and access past exams easily</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Exam Materials</h2>
            <p className="text-xl text-gray-600">Access past exams and semi-exams from your teachers and modules</p>
          </div>

          {/* Search Form */}
          <form className="space-y-8 bg-white p-8 rounded-xl shadow-lg">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Teacher Selection */}
              <div className="space-y-2">
                <Label htmlFor="teacher" className="text-base">
                  Select Teacher
                </Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose a teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="p-2">
                      <Input
                        placeholder="Search teachers..."
                        value={teacherSearch}
                        onChange={(e) => setTeacherSearch(e.target.value)}
                        className="mb-2"
                      />
                    </div>
                    <div className="max-h-[200px] overflow-y-auto">
                      {filteredTeachers.map((teacher) => (
                        <SelectItem key={teacher} value={teacher.toLowerCase()}>
                          {teacher}
                        </SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>

              {/* Module Selection */}
              <div className="space-y-2">
                <Label htmlFor="module" className="text-base">
                  Select Module
                </Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose a module" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="p-2">
                      <Input
                        placeholder="Search modules..."
                        value={moduleSearch}
                        onChange={(e) => setModuleSearch(e.target.value)}
                        className="mb-2"
                      />
                    </div>
                    <div className="max-h-[200px] overflow-y-auto">
                      {filteredModules.map((module) => (
                        <SelectItem key={module} value={module.toLowerCase()}>
                          {module}
                        </SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Exam Type Selection */}
            <div className="space-y-3">
              <Label className="text-base">Exam Type</Label>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="finalExam"
                    checked={selectedExamTypes.finalExam}
                    onCheckedChange={(checked) => setSelectedExamTypes((prev) => ({ ...prev, finalExam: checked }))}
                    className="h-5 w-5"
                  />
                  <Label
                    htmlFor="finalExam"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Final Exams
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="semiExam"
                    checked={selectedExamTypes.semiExam}
                    onCheckedChange={(checked) => setSelectedExamTypes((prev) => ({ ...prev, semiExam: checked }))}
                    className="h-5 w-5"
                  />
                  <Label
                    htmlFor="semiExam"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Semi Exams
                  </Label>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <Button
              className="w-full h-12 text-lg"
              size="lg"
              disabled={!selectedExamTypes.finalExam && !selectedExamTypes.semiExam}
            >
              <Search className="mr-2 h-5 w-5" />
              Search Exams
            </Button>
          </form>

          {/* Results Preview Section */}
          <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Search Results</h3>
            <div className="rounded-lg border border-dashed border-gray-300 p-8">
              <p className="text-center text-gray-500">Your search results will appear here</p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Easy Access</h3>
              <p className="text-gray-600">Quick and simple access to all your exam materials</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Comprehensive Library</h3>
              <p className="text-gray-600">Wide range of exams from various modules and teachers</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Updated Regularly</h3>
              <p className="text-gray-600">New exam materials added frequently</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 ExamBank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

