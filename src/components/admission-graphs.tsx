"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { overallStats, collegeStats, courseStats } from "@/data/admission-statistics"
import type { YearlyStats } from "@/data/admission-statistics"

type GraphType = 'overall' | 'college' | 'course'

interface AdmissionGraphsProps {
  className?: string
}

export function AdmissionGraphs({ className }: AdmissionGraphsProps) {
  const [activeGraph, setActiveGraph] = useState<GraphType>('overall')
  const [selectedCollege, setSelectedCollege] = useState<string>(Object.keys(collegeStats)[0] ?? '')
  const [selectedCourse, setSelectedCourse] = useState<string>(Object.keys(courseStats)[0] ?? '')

  // Helper function to convert YearlyStats to chart data for grouped bars
  const convertToGroupedChartData = (data: YearlyStats) => {
    return Object.entries(data).map(([year, stats]) => ({
      year,
      applications: stats.applications,
      offers: stats.offers,
      acceptances: stats.acceptances
    }));
  };

  const chartConfig = {
    applications: {
      label: "Applications",
      color: "var(--chart-3)",
    },
    offers: {
      label: "Offers",
      color: "var(--chart-1)",
    },
    acceptances: {
      label: "Acceptances",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  const renderGraph = () => {
    let data: YearlyStats;
    let title = "";
    
    switch (activeGraph) {
      case 'overall':
        data = overallStats;
        title = "Overall Admission Statistics";
        break;
      case 'college':
        data = collegeStats[selectedCollege] ?? overallStats;
        title = `${selectedCollege} - Admission Statistics`;
        break;
      case 'course':
        data = courseStats[selectedCourse] ?? overallStats;
        title = `${selectedCourse} - Admission Statistics`;
        break;
      default:
        data = overallStats;
        title = "Overall Admission Statistics";
    }

    const chartData = convertToGroupedChartData(data);

    // Calculate the maximum value to set proper Y-axis domain (since they're not stacked, use the max individual value)
    const maxValue = Math.max(...chartData.map((d: { applications: number; offers: number; acceptances: number }) => 
      Math.max(d.applications, d.offers, d.acceptances)
    ));
    
    // Smart scaling based on data range
    let tickInterval: number;
    let yAxisMax: number;
    
    if (maxValue <= 50) {
      // For small values (0-50), use intervals of 5
      tickInterval = 5;
      yAxisMax = Math.ceil(maxValue / 5) * 5;
    } else if (maxValue <= 100) {
      // For medium values (51-100), use intervals of 10
      tickInterval = 10;
      yAxisMax = Math.ceil(maxValue / 10) * 10;
    } else if (maxValue <= 500) {
      // For larger values (101-500), use intervals of 25
      tickInterval = 25;
      yAxisMax = Math.ceil(maxValue / 25) * 25;
    } else {
      // For very large values (500+), use intervals of 50
      tickInterval = 50;
      yAxisMax = Math.ceil(maxValue / 50) * 50;
    }

    return (
      <div>
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid 
                stroke="var(--border)"
                vertical={false}
              />
              <XAxis 
                dataKey="year"
                type="category"
                tickLine={false}
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              />
              <YAxis
                domain={[0, yAxisMax]}
                interval={0}
                ticks={Array.from({ length: Math.floor(yAxisMax / tickInterval) + 1 }, (_, i) => i * tickInterval)}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickFormatter={(value: number) => value.toString()}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="applications"
                fill="var(--color-applications)"
                radius={[2, 2, 0, 0]}
              />
              <Bar
                dataKey="offers"
                fill="var(--color-offers)"
                radius={[2, 2, 0, 0]}
              />
              <Bar
                dataKey="acceptances"
                fill="var(--color-acceptances)"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    );
  };

  return (
    <Card className={className}>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Cambridge Admission Statistics</CardTitle>
          <CardDescription>
            Singapore student admission data from 2015-2024
          </CardDescription>
        </div>
        <Select value={activeGraph} onValueChange={(value) => setActiveGraph(value as GraphType)}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Overall" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="overall" className="rounded-lg">
              Overall Statistics
            </SelectItem>
            <SelectItem value="college" className="rounded-lg">
              By College
            </SelectItem>
            <SelectItem value="course" className="rounded-lg">
              By Course
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {/* Secondary dropdowns for college/course selection */}
        {activeGraph === 'college' && (
          <div className="mb-4">
            <Select value={selectedCollege} onValueChange={setSelectedCollege}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select a college" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(collegeStats).map((college) => (
                  <SelectItem key={college} value={college}>
                    {college}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {activeGraph === 'course' && (
          <div className="mb-4">
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(courseStats).map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="min-h-[300px]">
          {renderGraph()}
        </div>
        
        {/* Legend/Summary */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <div className="mb-2">
            <p className="text-sm font-medium text-foreground">Legend:</p>
            <p className="text-xs text-muted-foreground">
              • <strong>Applications</strong>: Total number of applications submitted<br/>
              • <strong>Offers</strong>: Number of applications that received offers<br/>
              • <strong>Acceptances</strong>: Number of offers that were accepted
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Please note: For data protection purposes, where a final figure on any visualisation is 5 or less, it is reported as &quot;5&quot;. If the figure is 0, it will be reported as &quot;0&quot;
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
