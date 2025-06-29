// src/missions/missions.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MissionsService } from '../services/missions.service';
import { CreateMissionDto } from '../dto/create-mission.dto';
import { UpdateMissionDto } from '../dto/update-mission.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('missions')
@Controller('missions')
export class MissionsController {
    constructor(private readonly missionsService: MissionsService) { }

    @Post()
    @ApiOperation({ summary: 'Creates a new flight mission for Aegis.' })
    @ApiResponse({ status: 201, description: 'Mission successfully created.' })
    @ApiResponse({ status: 400, description: 'Invalid input data.' })
    @ApiBody({ type: CreateMissionDto, description: 'Payload to create a new mission.' })
    create(@Body() createMissionDto: CreateMissionDto) {
        return this.missionsService.create(createMissionDto);
    }

    @Get()
    @ApiOperation({ summary: 'Retrieves all registered flight missions.' })
    @ApiResponse({ status: 200, description: 'List of missions successfully retrieved.' })
    findAll() {
        return this.missionsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieves a specific flight mission by ID.' })
    @ApiParam({ name: 'id', description: 'Numeric ID of the mission', type: Number })
    @ApiResponse({ status: 200, description: 'Mission successfully found.' })
    @ApiResponse({ status: 404, description: 'Mission not found.' })
    findOne(@Param('id') id: string) {
        return this.missionsService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Partially updates a flight mission by ID.' })
    @ApiParam({ name: 'id', description: 'Numeric ID of the mission to be updated', type: Number })
    @ApiBody({ type: UpdateMissionDto, description: 'Payload to update the mission.' })
    @ApiResponse({ status: 200, description: 'Mission successfully updated.' })
    @ApiResponse({ status: 404, description: 'Mission not found.' })
    update(@Param('id') id: string, @Body() updateMissionDto: UpdateMissionDto) {
        return this.missionsService.update(+id, updateMissionDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletes a flight mission by ID.' })
    @ApiParam({ name: 'id', description: 'Numeric ID of the mission to be deleted', type: Number })
    @ApiResponse({ status: 200, description: 'Mission successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Mission not found.' })
    remove(@Param('id') id: string) {
        return this.missionsService.remove(+id);
    }
}
